import { NextResponse } from 'next/server';

export async function GET() {
    const BASE = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
    try {
        const res = await fetch(`${BASE}/status`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Gateway status check failed');
        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ status: 'unreachable', message: 'The gateway is currently offline.' }, { status: 503 });
    }
}
