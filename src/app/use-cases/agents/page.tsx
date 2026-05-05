import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Bot, Zap, Shield, TrendingUp, Code, Layers } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Agents Infrastructure | Frenix Gateway for Autonomous Agents",
    description: "Build reliable AI agents with Frenix. Automatic failover, multi-model routing, and sub-1ms latency ensure your agents never go offline. Used by teams building coding agents, customer support bots, and autonomous workflows.",
    keywords: ["AI agents infrastructure", "autonomous agents API", "AI agent gateway", "multi-agent system", "AI agent failover", "coding agent infrastructure", "customer support AI", "agentic workflows"],
    alternates: { canonical: "https://www.frenix.sh/use-cases/agents" },
    openGraph: {
        title: "AI Agents Infrastructure | Frenix Gateway",
        description: "Build reliable AI agents with automatic failover and multi-model routing.",
        url: "https://www.frenix.sh/use-cases/agents",
        type: "website",
    },
};

export default function AIAgentsPage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">AI Agents</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        Infrastructure for{" "}
                        <span className="text-primary">autonomous AI agents</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        AI agents require reliable, low-latency access to multiple models. Frenix provides the infrastructure layer that keeps your agents running —
                        with automatic failover, intelligent model routing, and sub-1ms overhead that ensures your agents respond in real-time.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                            Start building agents <ArrowRight size={16} />
                        </Link>
                        <Link href="/docs" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                            <Code size={16} /> Agent SDK docs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Frenix for Agents */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Why agent builders choose Frenix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { icon: Zap, title: "Sub-1ms routing", desc: "Agent chains multiply latency. Frenix's minimal overhead ensures your multi-step agent workflows complete in seconds, not minutes." },
                        { icon: Shield, title: "99.7% uptime SLA", desc: "Your agents can't afford downtime. Frenix's redundant infrastructure and automatic failover keep agents running 24/7." },
                        { icon: Bot, title: "Multi-model agents", desc: "Route different tasks to different models. Use GPT-4o for reasoning, Claude for long context, and Haiku for fast classification — all in one agent." },
                        { icon: TrendingUp, title: "Cost optimization", desc: "Automatically route simple tasks to cheaper models. Save 60-80% on token costs without sacrificing quality." },
                        { icon: Layers, title: "Parallel execution", desc: "Run multiple agent tasks in parallel across different models. Frenix handles concurrent requests with intelligent rate limiting." },
                        { icon: Code, title: "OpenAI SDK native", desc: "Build agents with familiar tools. LangChain, AutoGen, CrewAI, and the OpenAI SDK all work out of the box." },
                    ].map((f, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                                <f.icon size={18} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Agent Architecture */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        How teams use Frenix for AI agents
                    </h2>
                    <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                        <p>
                            Modern AI agents are multi-step workflows that chain together multiple model calls. A typical coding agent might:
                        </p>
                        <div className="grid md:grid-cols-4 gap-4 my-8">
                            {[
                                { step: "1", title: "Understand", model: "GPT-4o", desc: "Parse user request" },
                                { step: "2", title: "Plan", model: "Claude 3.5", desc: "Generate solution plan" },
                                { step: "3", title: "Execute", model: "GPT-4 Turbo", desc: "Write code" },
                                { step: "4", title: "Review", model: "Claude Haiku", desc: "Quick validation" },
                            ].map((s, i) => (
                                <div key={i} className="p-4 bg-black/40 rounded-xl border border-white/5 text-center">
                                    <div className="text-xs font-bold text-primary mb-1">Step {s.step}</div>
                                    <div className="text-sm font-bold text-foreground mb-1">{s.title}</div>
                                    <div className="text-xs text-muted-foreground">{s.model}</div>
                                    <div className="text-xs text-muted-foreground/60 mt-1">{s.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p>
                            With Frenix, all four steps use the same API endpoint and API key. The gateway handles authentication,
                            rate limiting, and failover for each model automatically. If Claude is experiencing issues, the gateway
                            can retry with an alternative model — keeping your agent workflow intact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Build agents with any framework
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">LangChain Agent</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">from</span> langchain_openai <span className="text-primary">import</span> ChatOpenAI</div>
                            <div><span className="text-primary">from</span> langchain.agents <span className="text-primary">import</span> AgentExecutor</div>
                            <div className="mt-2">llm = ChatOpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span>,</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;gpt-4o&quot;</span></div>
                            <div>)</div>
                            <div className="mt-2"><span className="opacity-50"># Agent works with ANY model</span></div>
                            <div>agent = create_openai_functions_agent(llm, tools)</div>
                        </div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">AutoGen Agent</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">from</span> autogen <span className="text-primary">import</span> AssistantAgent</div>
                            <div className="mt-2">config_list = [{`{`}</div>
                            <div>&nbsp;&nbsp;<span className="text-emerald-400/80">&quot;base_url&quot;</span>: <span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;<span className="text-emerald-400/80">&quot;api_key&quot;</span>: <span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span>,</div>
                            <div>&nbsp;&nbsp;<span className="text-emerald-400/80">&quot;model&quot;</span>: <span className="text-emerald-400/80">&quot;claude-3.5-sonnet&quot;</span></div>
                            <div>{`}`}]</div>
                            <div className="mt-2">assistant = AssistantAgent(<span className="text-emerald-400/80">&quot;assistant&quot;</span>, llm_config={`{`}<span className="text-emerald-400/80">&quot;config_list&quot;</span>: config_list{`}`})</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    AI Agents FAQ
                </h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                        { q: "How does Frenix handle agent rate limits?", a: "Frenix implements intelligent rate limiting per API key. For agent workloads, we recommend using dedicated keys with higher limits. The gateway queues and batches requests to maximize throughput while respecting upstream provider limits." },
                        { q: "Can agents use multiple models in a single workflow?", a: "Yes. This is a core use case for Frenix. Your agent can call GPT-4o for one task, Claude for another, and Gemini for a third — all through the same endpoint with the same API key. Just change the model parameter per request." },
                        { q: "What happens if a model fails mid-agent-workflow?", a: "Frenix automatically retries failed requests. For critical agent workflows, you can configure fallback models. If GPT-4o is unavailable, the gateway can retry with Claude or Gemini — keeping your agent running." },
                        { q: "Is Frenix suitable for production agent deployments?", a: "Absolutely. Teams use Frenix to power customer-facing AI agents, internal automation, coding assistants, and autonomous workflows. The 99.7% uptime SLA and automatic failover make it production-ready." },
                    ].map((faq, i) => (
                        <div key={i}>
                            <h3 className="text-base font-bold text-foreground mb-2">{faq.q}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1200px] mx-auto px-6 pb-20">
                <div className="p-12 md:p-16 bg-white text-black rounded-[32px] text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 !text-black">
                        Build agents that never go offline
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        150+ models are completely free. Start building agents through a single API endpoint.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Start building free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}