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
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Redirect back to the client with authorization code
    return NextResponse.redirect(data.redirect_to);
  } else {
    const { data, error } = await (supabase.auth as any).oauth.denyAuthorization(authorizationId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Redirect back to the client with error
    return NextResponse.redirect(data.redirect_to);
  }
}
