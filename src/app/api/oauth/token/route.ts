import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // We proxy EXACTLY what the client sent to Supabase
    const response = await fetch(`${supabaseUrl}/auth/v1/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'apikey': anonKey!,
        // Pass through the Authorization header (Basic auth)
        'Authorization': request.headers.get('Authorization') || '',
      },
      body: new URLSearchParams(body as any),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
