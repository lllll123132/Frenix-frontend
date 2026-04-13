'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, CheckCircle2 } from 'lucide-react';

const rows = [
  { area: 'Coding benchmark signal', axion: '87.6% SWE-bench 2', other: 'High coding capability' },
  { area: 'Conversation depth', axion: 'Strong long-session continuity', other: 'Strong reasoning depth' },
  { area: 'Default response profile', axion: 'Short and execution-first', other: 'More expansive by default' },
  { area: 'Engineering workflow fit', axion: 'Build/debug focused', other: 'Broad analytical strength' },
];

export default function AxionVsClaudeOpusPost() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary">Comparison</span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest text-indigo-300">Axion vs Claude Opus 4.6</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 text-foreground leading-[1.1]">
            Axion 1.5 Pro vs Claude Opus 4.6
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
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Clock size={14} /> 8 min read
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Axion 1.5 Pro and Claude Opus 4.6 are both top-tier models. The difference is mostly about operating style in real engineering loops.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground border-b border-white/10">Area</th>
                  <th className="py-3 px-4 text-xs uppercase tracking-widest text-primary border-b border-white/10">Axion 1.5 Pro</th>
                  <th className="py-3 pl-4 text-xs uppercase tracking-widest text-muted-foreground border-b border-white/10">Claude Opus 4.6</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.area}>
                    <td className="py-4 pr-4 text-sm text-foreground border-b border-white/5">{r.area}</td>
                    <td className="py-4 px-4 text-sm text-foreground/90 border-b border-white/5">{r.axion}</td>
                    <td className="py-4 pl-4 text-sm text-muted-foreground border-b border-white/5">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Axion Positioning</h2>
          <div className="space-y-4 mb-12">
            {[
              'Optimized for direct code execution and low-friction iteration.',
              'Strong stability across multi-step implementation tasks.',
              'Consistent concise response behavior for engineering teams.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-muted-foreground m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
