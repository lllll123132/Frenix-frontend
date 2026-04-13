'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Gauge, Layers, Wrench, CheckCircle2 } from 'lucide-react';

export default function Axion15ProFreeSweBench2Post() {
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
            <span className="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-[10px] font-bold uppercase tracking-widest text-fuchsia-400">
              Free Tier
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 text-foreground leading-[1.1]">
            Axion 1.5 Pro Free Scores 79.8% on SWE-bench 2
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
                <Clock size={14} /> 6 min read
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="p-8 md:p-10 rounded-[28px] bg-fuchsia-500/5 border border-fuchsia-500/20 mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-black mb-3">Result</p>
            <p className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">79.8%</p>
            <p className="text-muted-foreground m-0">Axion 1.5 Pro Free on SWE-bench 2</p>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Axion 1.5 Pro Free posted a <strong>79.8%</strong> SWE-bench 2 score, delivering strong software engineering performance while staying accessible for broad developer use.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            The free release is built for practical velocity: concise outputs, predictable coding behavior, and architecture guidance that remains grounded in production constraints.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">What Teams Get in the Free Model</h2>
          <div className="space-y-4 mb-12">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Gauge size={16} /> Fast, Actionable Responses</div>
              <p className="text-sm text-muted-foreground m-0">Short, execution-first answers that reduce iteration time during debugging and implementation.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Layers size={16} /> Durable Session Behavior</div>
              <p className="text-sm text-muted-foreground m-0">Reliable carry-forward of decisions and constraints across long conversations and multi-step tasks.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><Wrench size={16} /> Strong Engineering Defaults</div>
              <p className="text-sm text-muted-foreground m-0">Emphasis on validation, robust error handling, and practical architecture choices suitable for production paths.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-foreground font-bold"><CheckCircle2 size={16} /> Simplicity-First Decisions</div>
              <p className="text-sm text-muted-foreground m-0">Recommends minimal viable complexity where possible, while still protecting correctness and security.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Benchmark Value for Developer Teams</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A near-80% SWE-bench 2 score in a free model tier is meaningful because it reflects practical ability on real-world repository tasks, not just isolated prompt puzzles.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Bottom Line</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Axion 1.5 Pro Free offers a high-performing entry point for teams and individual builders who want reliable coding assistance with modern engineering standards baked in.
          </p>
        </div>

        <footer className="mt-16 p-10 bg-white text-black rounded-[32px] text-center">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 !text-black">Start with Axion 1.5 Pro Free</h2>
          <p className="text-sm font-medium mb-8 !text-black/60">Use benchmark-backed quality without upfront cost.</p>
          <Link href="/signin" className="inline-flex h-12 px-8 bg-black text-white rounded-xl items-center justify-center font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </footer>
      </div>
    </article>
  );
}
