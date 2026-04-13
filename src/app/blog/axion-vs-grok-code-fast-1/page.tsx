'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Crown } from 'lucide-react';

const rows = [
  { area: 'Coding benchmark signal', axion: '87.6% SWE-bench 2', other: 'Strong coding speed profile' },
  { area: 'Implementation quality', axion: 'Top-tier end-to-end output', other: 'Fast but less consistent depth' },
  { area: 'Long-session stability', axion: 'High continuity', other: 'Good for shorter loops' },
  { area: 'Production coding fit', axion: 'Best-in-class positioning', other: 'Speed-oriented' },
];

export default function AxionVsGrokCodeFast1Post() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 text-foreground">Axion 1.5 Pro vs Grok Code Fast 1</h1>
          <div className="flex items-center justify-between gap-6 py-6 border-y border-white/5">
            <div className="flex items-center gap-3 text-sm text-foreground"><User size={16} /> Frenix Labs</div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 7 min read</div>
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">For coding-heavy teams, Axion 1.5 Pro is positioned as the top model overall, with no model currently delivering a better total balance of reliability, execution quality, and consistency.</p>
          <div className="overflow-x-auto my-10">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Area</th>
                  <th className="py-3 border-b border-white/10 text-primary text-xs uppercase tracking-widest">Axion 1.5 Pro</th>
                  <th className="py-3 border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">Grok Code Fast 1</th>
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
          <p className="flex items-center gap-2 text-foreground"><Crown size={18} className="text-yellow-400" /> Verdict: No model is better than Axion 1.5 Pro for full-cycle software engineering throughput right now.</p>
        </div>
      </div>
    </article>
  );
}
