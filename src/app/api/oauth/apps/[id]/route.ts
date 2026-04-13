import { createClient, createAdminClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { name, redirect_uris, logo_url } = body;

  const adminSupabase = await createAdminClient();

  // 1. Verify ownership
  const { data: existingApp, error: checkError } = await adminSupabase
    .from('oauth_apps')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (checkError || !existingApp) {
    return NextResponse.json({ error: 'App not found or unauthorized' }, { status: 404 });
  }

  // 2. Update client in Supabase Auth
  const { error: clientError } = await (adminSupabase.auth as any).admin.oauth.updateClient(existingApp.client_id, {
    name: name || existingApp.name,
    redirect_uris: redirect_uris || undefined,
  });

  if (clientError) {
    return NextResponse.json({ error: clientError.message }, { status: 500 });
  }

  // 3. Update mapping table
  const { data: updated, error: updateError } = await adminSupabase
    .from('oauth_apps')
    .update({
      name: name || existingApp.name,
      logo_url: logo_url !== undefined ? logo_url : existingApp.logo_url,
    })
    .eq('id', id)
    .select()
    .single();

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const adminSupabase = await createAdminClient();

  // 1. Verify ownership and get client_id
  const { data: existingApp, error: checkError } = await adminSupabase
    .from('oauth_apps')
    .select('client_id')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (checkError || !existingApp) {
    return NextResponse.json({ error: 'App not found or unauthorized' }, { status: 404 });
  }

  // 2. Delete client from Supabase Auth
  const { error: clientError } = await (adminSupabase.auth as any).admin.oauth.deleteClient(existingApp.client_id);

  if (clientError) {
    return NextResponse.json({ error: clientError.message }, { status: 500 });
  }

  // 3. Delete from mapping table
  await adminSupabase.from('oauth_apps').delete().eq('id', id);

  return NextResponse.json({ success: true });
}
