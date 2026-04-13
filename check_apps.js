const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env' });

async function check() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase
    .from('oauth_apps')
    .select('*');

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Apps:', JSON.stringify(data, null, 2));
  }
}

check();
