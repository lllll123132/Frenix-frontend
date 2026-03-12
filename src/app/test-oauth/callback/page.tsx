'use client';

import { useSearchParams } from 'next/navigation';
import { CheckCircle2, XCircle, Shield, ArrowLeft, Terminal } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  const state = searchParams.get('state');

  return (
    <div className="min-h-screen bg-black text-white p-12 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Background Polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        
        {/* Result Icon */}
        <div className="mb-12">
          {code ? (
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[60px]" />
              <div className="relative w-32 h-32 rounded-[40px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={64} />
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-[60px]" />
              <div className="relative w-32 h-32 rounded-[40px] bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <XCircle size={64} />
              </div>
            </div>
          )}
        </div>

        {/* Title & Status */}
        <div className="space-y-4 mb-12">
          <h1 className="text-5xl font-black italic tracking-tighter">
            Handshake <span className={code ? 'text-emerald-500' : 'text-red-500'}>{code ? 'Successful' : 'Failed'}</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            {code 
              ? 'The Supabase OAuth server has successfully authenticated the session and returned an authorization code.' 
              : 'The authorization request was either denied or encountered an error during the process.'}
          </p>
        </div>

        {/* Data Payload Card */}
        <div className="w-full bg-[#080808] border border-white/5 rounded-[40px] p-10 space-y-8 shadow-2xl text-left">
          
          <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
               <Terminal size={20} />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Receiver Payload</h3>
              <p className="text-xs font-medium text-gray-500">Raw data returned via redirect_uri</p>
            </div>
          </div>

          <div className="space-y-6">
            {code && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Authorization Code</label>
                <div className="bg-black/40 border border-white/5 p-5 rounded-2xl break-all font-mono text-sm text-emerald-500/80 leading-relaxed">
                  {code}
                </div>
              </div>
            )}

            {error && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Error Code</label>
                <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl font-mono text-sm text-red-400">
                  {error}
                </div>
              </div>
            )}

            {errorDescription && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Description</label>
                <div className="text-gray-400 font-medium leading-relaxed">
                  {errorDescription}
                </div>
              </div>
            )}

            {state && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Session state</label>
                <div className="text-sm font-bold text-gray-500">{state}</div>
              </div>
            )}
          </div>
        </div>

        {/* Action Bottom */}
        <div className="mt-12">
          <Link 
            href="/test-oauth" 
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Return to Tester
          </Link>
        </div>

        {/* Trace Footer */}
        <div className="mt-20 opacity-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span>Frenix Gateway OAuth Trace log 2.1</span>
        </div>

      </div>
    </div>
  );
}

export default function TestOAuthCallbackPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center text-white/20 animate-pulse">Processing callback...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
