'use client';

import { Shield, ArrowRight, ExternalLink, Key, Globe } from 'lucide-react';

export default function RealOAuthTester() {
  const isMaintenance = true;

  if (isMaintenance) {
     return <div className="h-screen bg-black flex items-center justify-center text-white/30 font-black uppercase tracking-widest italic">Protocol Validator // Maintenance Mode</div>
  }
  // Provided credentials
  const clientId = "68b39761-ae3d-4a0d-b4dd-585d5bd2dce9";
  const redirectUri = "http://localhost:3001/test-oauth/callback";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pmglmcvceitpcvrlpjhp.supabase.co";

  const generateCodeChallenge = async (verifier: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    const base64url = btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    return base64url;
  };

  const handleStartFlow = async () => {
    const state = Math.random().toString(36).substring(7);
    
    // PKCE Setup: Standard Supabase requirement
    const codeVerifier = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    
    // In a real app, you'd save the code_verifier in localStorage/sessionStorage 
    // to exchange it later, but here we just need to satisfy the handshake.
    localStorage.setItem('oauth_verifier', codeVerifier);

    // Construct the standard OAuth 2.0 Authorize URL for Supabase (Custom Identity Provider)
    const authUrl = `${supabaseUrl}/auth/v1/oauth/authorize?` + 
      `client_id=${clientId}&` +
      `response_type=code&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=openid+email+profile&` +
      `state=${state}&` +
      `code_challenge=${codeChallenge}&` +
      `code_challenge_method=S256`;

    console.log("Initiating OAuth flow with PKCE:", authUrl);
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Background Polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-2xl text-primary mb-2">
                <Globe size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Protocol Validator</span>
           </div>
           <h1 className="text-6xl font-black italic tracking-tighter leading-none">
              Real-World <br/>
              <span className="text-white opacity-40">Integration Test</span>
           </h1>
           <p className="text-gray-500 font-medium text-lg max-w-sm mx-auto">
              Testing the Supabase OAuth server with mandatory PKCE enabled.
           </p>
        </div>

        {/* Credentials Card */}
        <div className="bg-[#050505] border border-white/5 rounded-[40px] p-8 space-y-6 text-left shadow-2xl">
            <div className="space-y-4">
               <div>
                  <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest block mb-2">Client ID</label>
                  <div className="bg-black border border-white/5 p-4 rounded-xl font-mono text-xs text-primary/80 break-all">
                    {clientId}
                  </div>
               </div>
               <div>
                  <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest block mb-2">Redirect URI</label>
                  <div className="bg-black border border-white/5 p-4 rounded-xl font-mono text-xs text-gray-500 break-all">
                    {redirectUri}
                  </div>
               </div>
            </div>

            <div className="pt-6 border-t border-white/5">
                <button 
                    onClick={handleStartFlow}
                    className="w-full h-20 rounded-[28px] bg-white text-black font-black text-xl hover:bg-primary transition-all active:scale-[0.98] flex items-center justify-center gap-4 group"
                >
                    Start Real Flow
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
            </div>
        </div>

        {/* Info Box */}
        <div className="grid grid-cols-2 gap-4 text-left">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <Key size={20} className="text-gray-600 mb-4" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">PKCE Enabled</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Generated code_challenge on the fly to satisfy modern Supabase Auth security requirements.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <ExternalLink size={20} className="text-gray-600 mb-4" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Final Step</h4>
                <p className="text-xs text-gray-500 leading-relaxed">After approval, returns to your localhost:3001 callback with a valid authorization code.</p>
            </div>
        </div>

        {/* Meta */}
        <div className="opacity-10 text-[9px] font-black uppercase tracking-[0.6em]">
            Stresstest node 3.1 // PKCE VALIDATOR Active
        </div>

      </div>
    </div>
  );
}
