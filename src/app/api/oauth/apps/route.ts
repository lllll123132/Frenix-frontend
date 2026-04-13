import { createClient, createAdminClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const adminSupabase = await createAdminClient();
    if (!adminSupabase) throw new Error('Failed to initialize Admin Supabase client');
    
    // Fetch clients from our mapping table
    const { data: apps, error } = await adminSupabase
      .from('oauth_apps')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Supabase Query Error:', error);
      // Catch "relation does not exist" or table not found errors
      if (error.code === '42P01' || error.code === 'PGRST116' || error.code === 'PGRST205' || error.message.includes('not found')) {
         return NextResponse.json([]);
      }
      return NextResponse.json({ error: error.message, code: error.code }, { status: 500 });
    }

    return NextResponse.json(apps || []);
  } catch (err: any) {
    console.error('OAuth Apps GET internal error:', err);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      message: err.message,
      hint: 'Check if SUPABASE_SERVICE_ROLE_KEY is set in .env'
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { name, redirect_uris, logo_url } = body;

  if (!name || !redirect_uris || !Array.isArray(redirect_uris)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const adminSupabase = await createAdminClient();

  // 1. Create client in Supabase Auth
  const { data: client, error: clientError } = await (adminSupabase.auth as any).admin.oauth.createClient({
    name,
    redirect_uris,
    client_type: 'confidential',
  });

  if (clientError) {
    return NextResponse.json({ error: clientError.message }, { status: 500 });
  }

  // 2. Save mapping in our public table
  const { data: appMapping, error: mapError } = await adminSupabase
    .from('oauth_apps')
    .insert({
      user_id: user.id,
      client_id: client.client_id,
      name,
      logo_url: logo_url || null,
      client_secret: client.client_secret // We store it here so the user can see it once
    })
    .select()
    .single();

  if (mapError) {
    // Cleanup if mapping fails? Maybe not worth the complexity yet
    console.error('Mapping error:', mapError);
  }

  return NextResponse.json({
    ...appMapping,
    client_id: client.client_id,
    client_secret: client.client_secret
  });
}
