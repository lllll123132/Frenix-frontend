'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Trophy, Gauge, Shield, CheckCircle2 } from 'lucide-react';

export default function Axion15ProSweBench2Post() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary">
              Benchmark
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              SWE-bench 2
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 text-foreground leading-[1.1]">
            Axion 1.5 Pro Scores 87.6% on SWE-bench 2
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <User size={20} className="text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Frenix Labs</span>
                <span className="text-[11px] font-medium text-muted-foreground">Published on April 13, 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} /> 7 min read
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="p-8 md:p-10 rounded-[28px] bg-primary/5 border border-primary/20 mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-black mb-3">Result</p>
            <p className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">87.6%</p>
            <p className="text-muted-foreground m-0">Axion 1.5 Pro on SWE-bench 2</p>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Axion 1.5 Pro reached <strong>87.6%</strong> on SWE-bench 2, marking a major step in practical software engineering quality across debugging, refactoring, and implementation workflows.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            Beyond benchmark score, this release is tuned for long multi-turn execution: high context retention, stable behavior across extended sessions, and concise output that stays focused on action instead of verbosity.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">What Improved in Axion 1.5 Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Gauge size={16} /> Response Discipline</div>
              <p className="text-sm text-muted-foreground m-0">Default responses are short, direct, and execution-oriented for faster engineering loops.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Trophy size={16} /> Long-Context Consistency</div>
              <p className="text-sm text-muted-foreground m-0">High reliability across lengthy conversations where constraints and prior decisions must remain intact.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Shield size={16} /> Production Safety Defaults</div>
              <p className="text-sm text-muted-foreground m-0">Strong backend standards around validation, security boundaries, and error handling for real systems.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><CheckCircle2 size={16} /> High-Signal Outputs</div>
              <p className="text-sm text-muted-foreground m-0">Decision flow prioritizes correctness and simplicity before aesthetics or verbosity.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Why SWE-bench 2 Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            SWE-bench 2 is one of the most realistic ways to evaluate coding models because it focuses on real repository tasks rather than isolated toy functions. Strong performance here is a better indicator of day-to-day engineering usefulness.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Bottom Line</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Axion 1.5 Pro is built for teams that want benchmark-leading capability with operationally useful behavior: concise communication, persistent context discipline, and production-minded implementation patterns.
          </p>
        </div>

        <footer className="mt-16 p-10 bg-white text-black rounded-[32px] text-center">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 !text-black">Build with Axion 1.5 Pro</h2>
          <p className="text-sm font-medium mb-8 !text-black/60">Benchmark strength meets practical engineering output.</p>
          <Link href="/signin" className="inline-flex h-12 px-8 bg-black text-white rounded-xl items-center justify-center font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
            Try on Frenix
          </Link>
        </footer>
      </div>
    </article>
  );
}
