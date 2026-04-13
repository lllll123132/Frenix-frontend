import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const decision = formData.get('decision');
  const authorizationId = formData.get('authorization_id') as string;

  if (!authorizationId) {
    return NextResponse.json({ error: 'Missing authorization_id' }, { status: 400 });
  }

  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  console.log('[Decision] Attempting decision for user:', user?.email || 'NOT AUTHENTICATED');
  
  if (!user) {
    console.error('[Decision] No active session found');
    return NextResponse.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
  }

  // Handle Mock/Test flow for frontend verification
  if (authorizationId === 'test' || authorizationId === 'preview') {
    if (decision === 'approve') {
      return NextResponse.redirect(`${new URL(request.url).origin}/test-oauth/callback?code=mock_code_${Math.random().toString(36).substring(7)}&state=test_state`);
    } else {
      return NextResponse.redirect(`${new URL(request.url).origin}/test-oauth/callback?error=access_denied&error_description=User+denied+the+request`);
    }
  }

  if (decision === 'approve') {
    const { data, error } = await (supabase.auth as any).oauth.approveAuthorization(authorizationId);

    if (error) {
      console.error('[Decision] Approval Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('[Decision] Approval Success Data:', data);

    if (!data?.redirect_to) {
      return NextResponse.json({ 
        error: 'Invalid session', 
        details: 'Supabase did not provide a redirect URL. The session might have expired.' 
      }, { status: 400 });
    }

    return NextResponse.redirect(data.redirect_to);
  } else {
    const { data, error } = await (supabase.auth as any).oauth.denyAuthorization(authorizationId);

    if (error) {
      console.error('[Decision] Denial Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('[Decision] Denial Success Data:', data);

    if (!data?.redirect_to) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 });
    }

    return NextResponse.redirect(data.redirect_to);
  }
}
