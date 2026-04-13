'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Crown } from 'lucide-react';

export default function AxionVsGlm5Post() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Axion 1.5 Pro vs GLM-5</h1>
        <div className="flex items-center justify-between py-6 border-y border-white/5 mb-10">
          <div className="flex items-center gap-2 text-sm"><User size={16} /> Frenix Labs</div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 7 min read</div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">Axion 1.5 Pro leads this comparison on practical engineering reliability, execution quality, and coding benchmark signal.</p>
          <p className="flex items-center gap-2"><Crown size={18} className="text-yellow-400" /> Verdict: For developer workflows, no model is better than Axion 1.5 Pro right now.</p>
        </div>
      </div>
    </article>
  );
}
