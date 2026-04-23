'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Check, ArrowUpRight, ArrowRight, Terminal } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import { cn } from '@/lib/utils';

function RevealSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  // Simple reveal for pricing page
  return <div className={cn("animate-in fade-in duration-700", className)} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <section id="pricing" className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-white uppercase italic">
            Pricing Plans
          </h1>
          <p className="text-muted-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Access 150+ models with zero infrastructure overhead. Choose a plan that scales with your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* Free */}
          <div className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:border-white/10 group min-h-[640px] shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 mb-8 px-3 py-1 bg-white/5 rounded-md self-start">Starter</span>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">$<CountUp to={0} duration={1} /></span>
              <span className="text-muted-foreground/60 text-sm font-medium">/mo</span>
            </div>
            <p className="text-muted-foreground/50 text-sm md:text-base mb-12 leading-relaxed font-medium">For hobbyists and side projects.</p>

            <div className="flex-1 space-y-5 mb-14">
              {["10 requests/minute", "All community models", "Standard latency", "Discord support"].map((f, fi) => (
                <div key={fi} className="flex items-center gap-3 text-sm font-medium text-white/70">
                  <div className="size-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-white/40" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Link href="/signin" className="w-full h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Get started
            </Link>
          </div>

          {/* Pro */}
          <div className="p-10 md:p-14 bg-white rounded-[2.5rem] flex flex-col relative overflow-hidden group shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10 duration-500 min-h-[640px]">
            <div className="absolute top-0 right-0 p-6">
              <div className="px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-black/40 border border-black/5">
                Popular
              </div>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-8 px-3 py-1 bg-black/5 rounded-md self-start">Developer Pro</span>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-black font-black">$<CountUp to={10} duration={2} /></span>
              <span className="text-black/60 text-sm font-medium">/mo</span>
            </div>
            <p className="text-black/60 text-sm md:text-base mb-12 leading-relaxed font-medium">For scaling apps and professional developers.</p>

            <div className="flex-1 space-y-5 mb-14">
              {["20 requests/minute", "Unlimited keys", "Priority latency", "Privacy-first logs", "Dedicated support"].map((f, fi) => (
                <div key={fi} className="flex items-center gap-3 text-sm font-bold text-black/80">
                  <div className="size-5 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-black" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                toast.error('Registration Paused', {
                  description: (
                    <div className="mt-2 text-xs space-y-3">
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <p className="font-bold text-white mb-1">Seats Currently Full!</p>
                        <p className="text-muted-foreground">Due to high demand, we have temporarily paused automated upgrades.</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="font-bold text-white mb-1">How to join?</p>
                        <p className="text-muted-foreground">Please DM our administrator directly to get on the waitlist or for manual activation.</p>
                        <p className="text-primary font-bold mt-2">Telegram: @itsmehiren</p>
                      </div>
                    </div>
                  ),
                  duration: 6000,
                });
              }}
              className="w-full h-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/10"
            >
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="mt-10 p-10 md:p-16 bg-white rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1100px] mx-auto shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10 relative z-10">
          <div className="text-center md:text-left">
            <span className="text-xl font-black text-black mb-3 block tracking-tight uppercase">Enterprise</span>
            <p className="text-black/60 text-base max-w-xl leading-relaxed font-medium">
              Custom quotas, private deployments, and white-glove support for mission-critical infrastructure applications. Experience the full power of Frenix with dedicated orchestration.
            </p>
          </div>
          <Link href="/signin" className="h-16 px-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shrink-0 shadow-xl shadow-black/10">
            Contact Sales <ArrowUpRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <p className="text-center mt-12 text-muted-foreground/40 text-[12px] font-medium">
          Prices in USD. By subscribing you agree to our <Link href="/about" className="underline underline-offset-2">About Us</Link>, <Link href="/terms" className="underline underline-offset-2">Terms</Link> and <Link href="/refund" className="underline underline-offset-2">Refund Policy</Link>.
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto mt-32 px-6">
        <div className="px-8 md:px-16 py-16 md:py-20 bg-white/5 border border-white/10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white mb-4 uppercase italic">Ready to scale?</h2>
            <p className="text-muted-foreground/60 text-lg">Join 2,000+ developers building the future of AI.</p>
          </div>
          <Link href="/dashboard" className="h-16 px-10 bg-white text-black rounded-2xl flex items-center justify-center font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all shrink-0">
            Get Started <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
