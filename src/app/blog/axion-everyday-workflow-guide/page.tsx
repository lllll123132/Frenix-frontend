'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, CheckCircle2 } from 'lucide-react';

const routine = [
  'Morning planning: ask Axion to convert goals into a concrete task list.',
  'Code implementation: use Axion for first-pass production code.',
  'Midday debugging: paste errors and request targeted root-cause fixes.',
  'Refactor pass: ask for minimal, safer diffs instead of full rewrites.',
  'End-of-day review: generate concise release notes and test checklist.',
];

export default function AxionEverydayWorkflowPost() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Using Axion Every Day: Practical Workflow Guide</h1>
        <div className="flex items-center justify-between py-6 border-y border-white/5 mb-10">
          <div className="flex items-center gap-2 text-sm"><User size={16} /> Frenix Labs</div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"><Clock size={14} /> 6 min read</div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">Axion performs best in daily use when you treat it as an execution partner across planning, coding, debugging, and shipping.</p>
          <div className="space-y-4 mt-8">
            {routine.map((step) => (
              <div key={step} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <p className="m-0 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
