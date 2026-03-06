import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { fetchStats } from '@/lib/gateway';

export async function GET() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const cookieStore = await cookies();
    const keyCookie = cookieStore.get('frenix_gateway_key');

    let stats: any;

    try {
        if (keyCookie?.value) {
            // Try with cookie first (full stats including key prefix and email)
            stats = await fetchStats(keyCookie.value);
        } else {
            // Fallback to fetching by email from DB (no cookie dependency)
            const emailStats = await import('@/lib/gateway').then(m => m.fetchStatsByEmail(user.email!));
            stats = emailStats;
        }

        return NextResponse.json(stats);
    } catch (err: any) {
        // If the cookie was invalid, clear it
        if (keyCookie?.value && (err.message.includes('401') || err.message.includes('Invalid API key'))) {
            cookieStore.delete('frenix_gateway_key');
        }

        // If even email lookup failed or return 404, say NO_KEY
        const msg = err.message || '';
        if (msg.includes('404') || msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('no api key')) {
            return NextResponse.json({ error: 'NO_KEY' }, { status: 404 });
        }

        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
