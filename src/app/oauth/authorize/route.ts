import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  // Reconstruct the Supabase Auth URL
  const query = searchParams.toString();
  const targetUrl = `${supabaseUrl}/auth/v1/oauth/authorize?${query}`;

  // Redirect the user to Supabase (who will then redirect back to our consent page)
  return NextResponse.redirect(targetUrl);
}
