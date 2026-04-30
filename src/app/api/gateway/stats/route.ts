import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { fetchStats, fetchStatsByEmail } from '@/lib/gateway';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;
    if (!userEmail) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const cookieStore = await cookies();
    const keyCookie = cookieStore.get('frenix_gateway_key');

    try {
        let stats: any;

        if (keyCookie?.value) {
            stats = await fetchStats(keyCookie.value);
            stats.plainKey = keyCookie.value;
        } else {
            stats = await fetchStatsByEmail(userEmail);
            if (stats.fullKey) stats.plainKey = stats.fullKey;
        }

        return NextResponse.json(stats);
    } catch (err: any) {
        const msg = err.message || '';

        // If key failed, retry by email fallback
        if (keyCookie?.value && (msg.includes('401') || msg.includes('Invalid API key'))) {
            cookieStore.delete('frenix_gateway_key');
            try {
                const emailStats = await fetchStatsByEmail(userEmail);
                return NextResponse.json(emailStats);
            } catch {
                return NextResponse.json({ error: 'NO_KEY' }, { status: 404 });
            }
        }

        return NextResponse.json({ error: 'NO_KEY' }, { status: 404 });
    }
}
