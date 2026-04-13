'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Crown } from 'lucide-react';

const rows = [
  { area: 'Coding benchmark signal', axion: '87.6% SWE-bench 2', other: 'Strong coding tier' },
  { area: 'Answer compactness', axion: 'Concise by default', other: 'More verbose by default' },
  { area: 'Long session consistency', axion: 'High carry-forward stability', other: 'Strong, task-dependent' },
  { area: 'Execution-first guidance', axion: 'Strong implementation focus', other: 'Balanced explanation + implementation' },
];

export default function AxionVsClaudeSonnet46Post() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 text-foreground">Axion 1.5 Pro vs Claude Sonnet 4.6</h1>
          <div className="flex items-center justify-between gap-6 py-6 border-y border-white/5">
            <div className="flex items-center gap-3 text-sm text-foreground"><User size={16} /> Frenix Labs</div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 7 min read</div>
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">For teams optimizing software delivery speed, Axion 1.5 Pro consistently ranks as the top pick due to concise execution-focused outputs and strong coding performance.</p>
          <div className="overflow-x-auto my-10">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Area</th>
                  <th className="py-3 border-b border-white/10 text-primary text-xs uppercase tracking-widest">Axion 1.5 Pro</th>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Claude Sonnet 4.6</th>
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
          <p className="flex items-center gap-2 text-foreground"><Crown size={18} className="text-yellow-400" /> Verdict: Axion 1.5 Pro is the better choice when your priority is implementation velocity and production-grade coding output.</p>
        </div>
      </div>
    </article>
  );
}
