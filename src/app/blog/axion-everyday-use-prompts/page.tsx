'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';

const prompts = [
  'Turn this ticket into a 5-step implementation plan.',
  'Write the smallest safe patch for this bug.',
  'Refactor this function without changing behavior.',
  'Generate tests for edge cases I missed.',
  'Review this diff for correctness and hidden regressions.',
  'Summarize this PR in release-note format.',
  'Convert this API error to an RFC 7807 response shape.',
  'Suggest a safer migration path with rollback.',
  'Simplify this over-engineered module.',
  'Give me a final deploy checklist for this change.',
];

export default function AxionEverydayPromptsPost() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Axion for Everyday Use: 10 High-Impact Prompts</h1>
        <div className="flex items-center justify-between py-6 border-y border-white/5 mb-10">
          <div className="flex items-center gap-2 text-sm"><User size={16} /> Frenix Labs</div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 6 min read</div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">Use these prompts daily to get faster output quality and fewer back-and-forth cycles with Axion.</p>
          <ol className="space-y-2 mt-8">
            {prompts.map((p) => (
              <li key={p} className="text-muted-foreground">{p}</li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
