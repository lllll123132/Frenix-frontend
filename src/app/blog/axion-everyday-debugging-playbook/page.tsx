'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';

const checklist = [
  'Paste exact error output and ask for probable root cause ranking.',
  'Request smallest safe patch with no behavior drift.',
  'Generate edge-case tests before applying the patch.',
  'Ask for rollback plan if change touches critical paths.',
  'Produce final postmortem notes in 5 bullets.',
];

export default function AxionEverydayDebuggingPlaybookPost() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Axion Everyday Debugging Playbook</h1>
        <div className="flex items-center justify-between py-6 border-y border-white/5 mb-10">
          <div className="flex items-center gap-2 text-sm"><User size={16} /> Frenix Labs</div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 6 min read</div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">Use this daily debugging flow with Axion to reduce time-to-fix and avoid regressions in production code.</p>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
