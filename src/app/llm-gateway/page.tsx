import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal, ChevronRight, Cpu, Layers, RefreshCw, Activity, ShieldCheck, Workflow } from "lucide-react";

export const metadata: Metadata = {
    title: "LLM Gateway | Route to Any Large Language Model — Frenix",
    description: "Frenix LLM Gateway lets you route requests to GPT-4, Claude, Gemini, Llama, DeepSeek and 150+ large language models through one OpenAI-compatible endpoint. Automatic failover, load balancing, and cost optimization.",
    keywords: ["LLM gateway", "large language model gateway", "LLM proxy", "LLM router", "LLM orchestration", "GPT-4 proxy", "Claude proxy", "multi-model gateway", "LLM load balancer"],
    alternates: { canonical: "https://www.frenix.sh/llm-gateway" },
    openGraph: {
        title: "LLM Gateway — Route to Any Large Language Model | Frenix",
        description: "One endpoint for GPT-4, Claude, Gemini, Llama, and 150+ LLMs. Automatic failover and sub-1ms routing overhead.",
        url: "https://www.frenix.sh/llm-gateway",
        type: "website",
    },
};

const models = [
    { category: "Reasoning", items: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "DeepSeek V3", "Llama 3.1 405B"] },
    { category: "Code Generation", items: ["GPT-4 Turbo", "Claude Opus", "DeepSeek Coder", "Codestral", "Llama 3.2 90B"] },
    { category: "Fast Inference", items: ["GPT-4o Mini", "Claude Haiku", "Gemini Flash", "Mistral Small", "Llama 3.2 1B"] },
    { category: "Embeddings", items: ["text-embedding-3-large", "text-embedding-3-small", "voyage-3", "Cohere Embed v3"] },
];

export default function LLMGatewayPage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">LLM Gateway</span>
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        One gateway for every{" "}
                        <span className="text-primary">large language model</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        An LLM gateway sits between your application and model providers, abstracting away the complexity of managing multiple APIs.
                        Frenix provides the fastest LLM gateway with support for 150+ models, intelligent routing, and automatic failover — all through
                        a single OpenAI-compatible endpoint.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                            Start for free <ArrowRight size={16} />
                        </Link>
                        <Link href="/docs" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                            <Terminal size={16} /> View documentation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Use an LLM Gateway */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-foreground">
                    Why do you need an LLM gateway?
                </h2>
                <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                    Building with LLMs means dealing with multiple providers, each with different APIs, rate limits, and failure modes. An LLM gateway solves this.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { icon: Layers, title: "Multi-Provider Access", desc: "Access OpenAI, Anthropic, Google, Meta, Mistral, and dozens more through a single API key and endpoint." },
                        { icon: RefreshCw, title: "Automatic Failover", desc: "When a provider goes down, your requests are automatically rerouted to a comparable model from another provider." },
                        { icon: Activity, title: "Unified Observability", desc: "Track token usage, latency, error rates, and costs across all providers in a single dashboard." },
                        { icon: ShieldCheck, title: "Security & Compliance", desc: "Zero-retention data policy. Your prompts and completions are never stored — only anonymized metadata for billing." },
                        { icon: Workflow, title: "Smart Routing", desc: "Latency-aware load balancing ensures every request hits the fastest available upstream provider endpoint." },
                        { icon: Cpu, title: "Cost Optimization", desc: "Route to cheaper models for simple tasks and premium models for complex reasoning — all through the same API." },
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

            {/* Model Categories */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    150+ large language models, one endpoint
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {models.map((cat, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <h3 className="text-lg font-bold text-foreground mb-4">{cat.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((m, j) => (
                                    <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs font-bold text-muted-foreground">{m}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-6">
                    <Link href="/models" className="underline underline-offset-2 hover:text-primary transition-colors">Browse the complete model catalog →</Link>
                </p>
            </section>

            {/* Integration */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        Integrate in 30 seconds
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>
                                Frenix is fully compatible with the OpenAI SDK. Change your base URL to <code className="text-primary font-bold">api.frenix.sh/v1</code> and
                                use your Frenix API key. Everything else — chat parameters, streaming, function calling, tool use — works identically.
                            </p>
                            <p>
                                This means you can switch between GPT-4o, Claude 3.5 Sonnet, Gemini Pro, and Llama 405B just by changing the model parameter.
                                No SDK changes, no new client libraries, no refactoring.
                            </p>
                            <p>
                                Works with Python, JavaScript/TypeScript, Go, Rust, Ruby, Java, and any language with an HTTP client or OpenAI-compatible library.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div className="opacity-50 mb-2"># Python — works with any OpenAI SDK</div>
                            <div><span className="text-primary">from</span> openai <span className="text-primary">import</span> OpenAI</div>
                            <div className="mt-2">client = OpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>)</div>
                            <div className="mt-3 opacity-50"># Use ANY model</div>
                            <div>response = client.chat.completions.create(</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;claude-3.5-sonnet&quot;</span>,</div>
                            <div>&nbsp;&nbsp;messages=[{`{"role": "user", "content": "Hello"}`}]</div>
                            <div>)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    LLM Gateway FAQ
                </h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                        { q: "What is an LLM gateway?", a: "An LLM gateway is a reverse proxy designed specifically for large language model traffic. It provides a unified API endpoint that routes requests to multiple model providers, handles authentication, failover, rate limiting, and observability." },
                        { q: "How is an LLM gateway different from an API gateway?", a: "While a standard API gateway handles generic HTTP traffic, an LLM gateway understands AI-specific concepts like token counting, model routing, streaming SSE responses, and provider-specific error handling. It's purpose-built for AI workloads." },
                        { q: "Can I use different models for different tasks?", a: "Yes. Send requests with different model parameters through the same endpoint. Use GPT-4o for complex reasoning, Claude Haiku for fast classification, and text-embedding-3-large for embeddings — all with one API key." },
                        { q: "What happens if a provider has an outage?", a: "Frenix monitors all upstream providers in real time. If a provider returns errors or becomes unreachable, the gateway automatically retries with a comparable model from a healthy provider — typically within milliseconds." },
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
                        Start routing to any LLM today
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        150+ models are completely free. Access them through a single endpoint in under a minute.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get started free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}