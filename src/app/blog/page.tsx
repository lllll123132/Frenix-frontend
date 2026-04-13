'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, User, Sparkles, Shield, Cpu, Layers, Activity, BrainCircuit, Scale } from 'lucide-react';

const blogPosts = [
  {
    title: "Axion 1.5 Pro vs GPT-5: Developer Comparison",
    excerpt: "A practical comparison of Axion 1.5 Pro and GPT-5 across coding reliability, context handling, and production workflow fit.",
    date: "April 13, 2026",
    readTime: "8 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gpt-5",
    category: "Comparison",
    icon: <Scale className="text-cyan-500" />
  },
  {
    title: "Axion 1.5 Pro vs Claude Opus 4.6",
    excerpt: "How Axion 1.5 Pro compares with Claude Opus 4.6 for software engineering, response control, and long multi-turn work.",
    date: "April 13, 2026",
    readTime: "8 min read",
    author: "Frenix Labs",
    slug: "axion-vs-claude-opus-4-6",
    category: "Comparison",
    icon: <Scale className="text-indigo-400" />
  },
  {
    title: "Axion 1.5 Pro vs Gemini 3.1 Pro",
    excerpt: "A side-by-side look at Axion 1.5 Pro and Gemini 3.1 Pro for engineering throughput, consistency, and implementation quality.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gemini-3-1-pro",
    category: "Comparison",
    icon: <Scale className="text-emerald-400" />
  },
  {
    title: "Axion 1.5 Pro vs Claude Sonnet 4.6",
    excerpt: "Comparing Axion and Sonnet for day-to-day coding, implementation speed, and answer precision under real dev workloads.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-claude-sonnet-4-6",
    category: "Comparison",
    icon: <Scale className="text-sky-400" />
  },
  {
    title: "Axion 1.5 Pro vs Gemini 2.5 Pro",
    excerpt: "A practical breakdown of Axion and Gemini 2.5 Pro for coding reliability, response control, and production implementation quality.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gemini-2-5-pro",
    category: "Comparison",
    icon: <Scale className="text-lime-400" />
  },
  {
    title: "Axion 1.5 Pro vs GPT-4.1",
    excerpt: "How Axion stacks against GPT-4.1 for software engineering tasks, consistency over long sessions, and execution-oriented responses.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gpt-4-1",
    category: "Comparison",
    icon: <Scale className="text-violet-400" />
  },
  {
    title: "Axion 1.5 Pro vs Grok Code Fast 1",
    excerpt: "Why Axion 1.5 Pro remains the top recommendation for serious software teams over Grok Code Fast 1.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-grok-code-fast-1",
    category: "Comparison",
    icon: <Scale className="text-orange-400" />
  },
  {
    title: "Axion 1.5 Pro vs Qwen3 Coder Next",
    excerpt: "A direct coding comparison showing why no model currently beats Axion 1.5 Pro for implementation-first workflows.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-qwen3-coder-next",
    category: "Comparison",
    icon: <Scale className="text-teal-400" />
  },
  {
    title: "Axion 1.5 Pro vs Kimi K2.5",
    excerpt: "From engineering velocity to consistency, here is why Axion 1.5 Pro is positioned as the strongest overall coding model.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-kimi-k2-5",
    category: "Comparison",
    icon: <Scale className="text-pink-400" />
  },
  {
    title: "Axion 1.5 Pro vs GPT-5.4",
    excerpt: "A focused comparison showing why Axion remains the top recommendation for implementation-first software teams.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gpt-5-4",
    category: "Comparison",
    icon: <Scale className="text-blue-400" />
  },
  {
    title: "Axion 1.5 Pro vs Gemini 3 Pro",
    excerpt: "Benchmark-backed comparison of Axion and Gemini 3 Pro for real development workflows and output reliability.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gemini-3-pro",
    category: "Comparison",
    icon: <Scale className="text-emerald-300" />
  },
  {
    title: "Axion 1.5 Pro vs Claude Opus 4.5",
    excerpt: "Why Axion is positioned as the strongest all-around coding model compared with Claude Opus 4.5.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-claude-opus-4-5",
    category: "Comparison",
    icon: <Scale className="text-violet-300" />
  },
  {
    title: "Using Axion Every Day: Practical Workflow Guide",
    excerpt: "A simple daily workflow for using Axion across planning, coding, debugging, and shipping.",
    date: "April 13, 2026",
    readTime: "6 min read",
    author: "Frenix Labs",
    slug: "axion-everyday-workflow-guide",
    category: "Everyday Use",
    icon: <Sparkles className="text-yellow-300" />
  },
  {
    title: "Axion for Everyday Use: 10 High-Impact Prompts",
    excerpt: "Ten repeatable daily prompts to get faster coding output and cleaner decisions from Axion.",
    date: "April 13, 2026",
    readTime: "6 min read",
    author: "Frenix Labs",
    slug: "axion-everyday-use-prompts",
    category: "Everyday Use",
    icon: <Sparkles className="text-amber-300" />
  },
  {
    title: "Axion 1.5 Pro vs Qwen3.5 Plus",
    excerpt: "Why Axion remains the top recommendation for implementation-heavy engineering teams over Qwen3.5 Plus.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-qwen3-5-plus",
    category: "Comparison",
    icon: <Scale className="text-cyan-300" />
  },
  {
    title: "Axion 1.5 Pro vs GLM-5",
    excerpt: "A practical coding comparison highlighting why Axion is positioned as the strongest all-around developer model.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-glm-5",
    category: "Comparison",
    icon: <Scale className="text-green-300" />
  },
  {
    title: "Axion 1.5 Pro vs Gemini 3.1 Pro",
    excerpt: "How Axion compares to Gemini 3.1 Pro when judged on coding consistency, output quality, and engineering velocity.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-vs-gemini-3-1-pro-advanced",
    category: "Comparison",
    icon: <Scale className="text-emerald-200" />
  },
  {
    title: "Axion Daily for Startups: Ship Faster with Less Team Size",
    excerpt: "A daily operating guide for startup teams using Axion to compress planning, coding, QA, and release cycles.",
    date: "April 13, 2026",
    readTime: "6 min read",
    author: "Frenix Labs",
    slug: "axion-daily-startup-guide",
    category: "Everyday Use",
    icon: <Sparkles className="text-yellow-200" />
  },
  {
    title: "Axion Everyday Debugging Playbook",
    excerpt: "A practical debugging routine to find root causes faster and ship fixes with higher confidence every day.",
    date: "April 13, 2026",
    readTime: "6 min read",
    author: "Frenix Labs",
    slug: "axion-everyday-debugging-playbook",
    category: "Everyday Use",
    icon: <Sparkles className="text-rose-300" />
  },
  {
    title: "Axion 1.5 Pro Hits 87.6% on SWE-bench 2",
    excerpt: "Axion 1.5 Pro set a new internal quality bar with an 87.6% SWE-bench 2 score, plus deeper long-context reliability for complex engineering work.",
    date: "April 13, 2026",
    readTime: "7 min read",
    author: "Frenix Labs",
    slug: "axion-1-5-pro-swe-bench-2",
    category: "Benchmark",
    icon: <BrainCircuit className="text-violet-500" />
  },
  {
    title: "Axion 1.5 Pro Free Scores 79.8% on SWE-bench 2",
    excerpt: "Axion 1.5 Pro Free reached 79.8% on SWE-bench 2 while preserving speed, practical coding defaults, and production-grade engineering behavior.",
    date: "April 13, 2026",
    readTime: "6 min read",
    author: "Frenix Labs",
    slug: "axion-1-5-pro-free-swe-bench-2",
    category: "Benchmark",
    icon: <BrainCircuit className="text-fuchsia-500" />
  },
  {
    title: "Frenix v2: Apache Bench Performance Report",
    excerpt: "See how the Frenix Enterprise Gateway achieved sub-40ms response times and a 100% success rate under high concurrency tests.",
    date: "March 17, 2026",
    readTime: "5 min read",
    author: "Infrastructure Lab",
    slug: "apache-bench-performance-report",
    category: "Benchmark",
    icon: <Activity className="text-blue-500" />
  },
  {
    title: "Mastering RBAC in AI Gateways",
    excerpt: "Learn how to implement high-performance Role-Based Access Control that scales across thousands of enterprise users without adding latency.",
    date: "March 17, 2026",
    readTime: "8 min read",
    author: "Hiren Patel",
    slug: "rbac-in-ai-gateways",
    category: "Security",
    icon: <Shield className="text-blue-500" />
  },
  {
    title: "The Enterprise Guide to SOC 2 Compliance in AI",
    excerpt: "Automate your audit trails and ensure every LLM interaction is securely logged and compliant with SOC 2 Type II standards.",
    date: "March 16, 2026",
    readTime: "12 min read",
    author: "Compliance Team",
    slug: "soc2-compliance-guide",
    category: "Compliance",
    icon: <Shield className="text-emerald-500" />
  },
  {
    title: "PII Redaction at the Edge",
    excerpt: "Protect sensitive user data by implementing real-time pattern matching and redaction before requests ever leave your secure environment.",
    date: "March 15, 2026",
    readTime: "6 min read",
    author: "Security Group",
    slug: "pii-redaction-at-the-edge",
    category: "Privacy",
    icon: <Sparkles className="text-red-500" />
  },
  {
    title: "Scaling Multi-Tenant AI Architecture",
    excerpt: "Discover the Org-Team-Project model that allows for granular billing and data isolation in large-scale SaaS applications.",
    date: "March 14, 2026",
    readTime: "10 min read",
    author: "Architecture Lead",
    slug: "multi-tenant-ai-architecture",
    category: "Architecture",
    icon: <Layers className="text-indigo-500" />
  },
  {
    title: "Top 5 AI Gateways for Developers in 2026",
    excerpt: "Ranking the best infrastructure players in the AI space based on latency, security, and developer experience.",
    date: "March 13, 2026",
    readTime: "8 min read",
    author: "Frenix Engineering",
    slug: "top-5-ai-gateways-2026",
    category: "Analysis",
    icon: <Cpu className="text-amber-500" />
  },
  {
    title: "What is Frenix? The Future of AI Infrastructure",
    excerpt: "Discover how Frenix is revolutionizing the way developers interact with large language models through a unified gateway.",
    date: "March 12, 2026",
    readTime: "5 min read",
    author: "Frenix Team",
    slug: "whats-frenix",
    category: "Architecture",
    icon: <Sparkles className="text-purple-500" />
  },
  {
    title: "Semantic Caching: Deep Dive into Cost Optimization",
    excerpt: "Reduce LLM costs by up to 90% using vector-based caching for semantically identical underground queries.",
    date: "March 11, 2026",
    readTime: "15 min read",
    author: "Data Science Group",
    slug: "semantic-caching-deep-dive",
    category: "Efficiency",
    icon: <Cpu className="text-teal-500" />
  },
  {
    title: "Why Choose Frenix for Your LLM Orchestration?",
    excerpt: "From latency-aware routing to zero-config failover, learn why elite engineering teams are switching to Frenix.",
    date: "March 10, 2026",
    readTime: "7 min read",
    author: "Infrastructure Group",
    slug: "why-frenix",
    category: "Product",
    icon: <Layers className="text-sky-500" />
  },
  {
    title: "GDPR and Data Residency in Global AI Deployments",
    excerpt: "How to route AI requests to specific geographical regions to comply with localized data residency laws.",
    date: "March 9, 2026",
    readTime: "9 min read",
    author: "Legal Engineering",
    slug: "gdpr-and-data-residency",
    category: "Compliance",
    icon: <Shield className="text-rose-500" />
  },
  {
    title: "Webhook-Driven AI Workflows",
    excerpt: "Build reactive systems that respond to gateway events like budget thresholds or completion completions.",
    date: "March 8, 2026",
    readTime: "6 min read",
    author: "DevOps Team",
    slug: "webhook-driven-ai-workflows",
    category: "Tutorial",
    icon: <Sparkles className="text-cyan-500" />
  }
];

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden pt-32 pb-40">
      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[180px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-blue-400 mb-8"
          >
            <Sparkles size={14} /> The Intelligence Journal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 italic uppercase"
          >
            Engineering <br />
            <span className="text-white/20">The Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl font-medium"
          >
            Insights into high-performance AI infrastructure, security protocols, and the architecture of neural intelligence.
          </motion.p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 3 * 0.1 }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group block relative h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {post.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-blue-500 transition-colors">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-500 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed font-medium mb-10 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                         <User size={14} className="text-white/40" />
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-tight text-white/60 leading-none mb-1">{post.author}</span>
                      <span className="block text-[9px] font-medium text-white/20">{post.date}</span>
                    </div>
                  </div>
                  <div className="text-blue-500 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 p-12 md:p-24 rounded-[4rem] bg-blue-600 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 italic">Stay Ahead of the Curve</h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto font-medium">Join 5,000+ infrastructure engineers receiving raw technical deep dives every week.</p>
            <form className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full md:w-80 bg-white/20 border border-white/10 rounded-2xl px-6 py-4 placeholder:text-white/40 outline-none focus:bg-white/30 transition-all font-bold"
              />
              <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
