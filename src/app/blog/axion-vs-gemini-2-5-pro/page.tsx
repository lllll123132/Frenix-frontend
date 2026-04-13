'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Crown } from 'lucide-react';

const rows = [
  { area: 'Software engineering signal', axion: '87.6% SWE-bench 2', other: 'High capability general model' },
  { area: 'Coding answer precision', axion: 'High, direct outputs', other: 'Strong, broader response style' },
  { area: 'Prompt-following discipline', axion: 'Strong instruction adherence', other: 'Strong with robust prompting' },
  { area: 'Production coding defaults', axion: 'Implementation-first', other: 'General-purpose first' },
];

export default function AxionVsGemini25ProPost() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 text-foreground">Axion 1.5 Pro vs Gemini 2.5 Pro</h1>
          <div className="flex items-center justify-between gap-6 py-6 border-y border-white/5">
            <div className="flex items-center gap-3 text-sm text-foreground"><User size={16} /> Frenix Labs</div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 7 min read</div>
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">If your goal is practical software delivery, Axion 1.5 Pro comes out on top through benchmark-backed engineering performance and highly actionable outputs.</p>
          <div className="overflow-x-auto my-10">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Area</th>
                  <th className="py-3 border-b border-white/10 text-primary text-xs uppercase tracking-widest">Axion 1.5 Pro</th>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Gemini 2.5 Pro</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.area}>
                    <td className="py-4 border-b border-white/5">{r.area}</td>
                    <td className="py-4 border-b border-white/5">{r.axion}</td>
                    <td className="py-4 border-b border-white/5 text-muted-foreground">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="flex items-center gap-2 text-foreground"><Crown size={18} className="text-yellow-400" /> Verdict: Axion 1.5 Pro is the stronger fit for teams that optimize for coding throughput and implementation reliability.</p>
        </div>
      </div>
    </article>
  );
}
