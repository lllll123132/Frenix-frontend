import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe, Server, BarChart3, Lock, Code, Terminal, Check, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Gateway | Unified API for 150+ LLMs — Frenix",
    description: "Frenix AI Gateway provides a single, secure API endpoint to access OpenAI, Anthropic Claude, Google Gemini, and 150+ large language models. Dynamic routing, automatic failover, sub-1ms overhead.",
    keywords: ["AI gateway", "LLM gateway", "unified AI API", "AI proxy", "LLM proxy", "AI infrastructure", "model routing", "AI orchestration", "OpenAI proxy", "Claude proxy", "Gemini proxy"],
    alternates: { canonical: "https://www.frenix.sh/ai-gateway" },
    openGraph: {
        title: "AI Gateway — One API for Every LLM | Frenix",
        description: "Route to OpenAI, Claude, Gemini and 150+ models through a single secure endpoint. Dynamic failover, load balancing, and zero client changes.",
        url: "https://www.frenix.sh/ai-gateway",
        type: "website",
    },
};

const features = [
    { icon: Zap, title: "Sub-1ms Overhead", description: "Latency-aware load balancing routes every request to the fastest available upstream provider in real time." },
    { icon: Shield, title: "Zero-Retention Security", description: "Your prompts and completions are never stored. TLS-encrypted tunnels proxy directly to upstream providers." },
    { icon: Globe, title: "Global Edge Network", description: "Deployed across multiple regions for consistently low latency regardless of your users' locations." },
    { icon: Server, title: "Automatic Failover", description: "If a provider goes down, Frenix instantly reroutes to a comparable model — zero downtime for your users." },
    { icon: BarChart3, title: "Real-Time Observability", description: "Monitor token usage, latency percentiles, error rates, and cost breakdowns through a unified dashboard." },
    { icon: Lock, title: "API Key Management", description: "Create, rotate, and scope API keys with fine-grained permissions. Per-key rate limits and usage caps." },
];

const providers = [
    { name: "OpenAI", models: "GPT-4o, GPT-4 Turbo, o1, o3" },
    { name: "Anthropic", models: "Claude Opus, Sonnet, Haiku" },
    { name: "Google DeepMind", models: "Gemini Pro, Ultra, Flash" },
    { name: "Meta", models: "Llama 3.1, Llama 3.2, Llama 4" },
    { name: "DeepSeek", models: "DeepSeek V3, R1, Coder" },
    { name: "Mistral", models: "Mistral Large, Medium, Small" },
];

export default function AIGatewayPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">AI Gateway</span>
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        The AI Gateway that powers{" "}
                        <span className="text-primary">production-grade</span> applications
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Frenix is an AI gateway — a unified proxy layer that sits between your application and AI model providers.
                        Send requests to a single endpoint and Frenix intelligently routes them to OpenAI, Anthropic, Google, Meta,
                        and dozens more providers with automatic failover, load balancing, and real-time observability.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                            Start for free <ArrowRight size={16} />
                        </Link>
                        <Link href="/docs" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                            <Terminal size={16} /> Read the docs
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is an AI Gateway */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        What is an AI Gateway?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>
                                An AI gateway is an infrastructure layer that acts as a reverse proxy between your application and multiple AI model providers.
                                Instead of integrating directly with each provider's SDK — managing separate API keys, error handling, rate limits, and response
                                formats — you integrate once with the gateway.
                            </p>
                            <p>
                                Think of it as a load balancer specifically designed for LLM traffic. The gateway handles authentication, request routing,
                                failover, response normalization, and observability so your application code stays clean and provider-agnostic.
                            </p>
                            <p>
                                Frenix is the fastest AI gateway available, adding less than 1ms of overhead per request while providing access to
                                150+ models across all major providers through a single OpenAI-compatible API endpoint.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div className="opacity-50 mb-2"># Before: Multiple provider integrations</div>
                            <div className="text-rose-400/60 line-through mb-1">openai_client = OpenAI(api_key=...)</div>
                            <div className="text-rose-400/60 line-through mb-1">anthropic_client = Anthropic(api_key=...)</div>
                            <div className="text-rose-400/60 line-through mb-4">google_client = Gemini(api_key=...)</div>

                            <div className="opacity-50 mb-2"># After: One Frenix endpoint</div>
                            <div className="text-emerald-400/80">client = OpenAI(</div>
                            <div className="text-emerald-400/80">&nbsp;&nbsp;base_url=&quot;https://api.frenix.sh/v1&quot;,</div>
                            <div className="text-emerald-400/80">&nbsp;&nbsp;api_key=&quot;sk-frenix-...&quot;</div>
                            <div className="text-emerald-400/80">)</div>
                            <div className="text-emerald-400/80 mt-2"># Works with ANY model</div>
                            <div className="text-emerald-400/80">client.chat.completions.create(</div>
                            <div className="text-emerald-400/80">&nbsp;&nbsp;model=&quot;gpt-4o&quot;,  # or claude-3.5-sonnet</div>
                            <div className="text-emerald-400/80">&nbsp;&nbsp;messages=[...]</div>
                            <div className="text-emerald-400/80">)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-foreground">
                    Why developers choose Frenix as their AI gateway
                </h2>
                <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                    Built from the ground up for production workloads. Every feature is designed to reduce complexity and increase reliability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((f, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                                <f.icon size={18} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Supported Providers */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-foreground">
                    Supported AI providers and models
                </h2>
                <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                    Access every major AI provider through a single API key. New models are added within hours of release.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {providers.map((p, i) => (
                        <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <h3 className="text-base font-bold text-foreground mb-1">{p.name}</h3>
                            <p className="text-xs text-muted-foreground">{p.models}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-4">
                    ...and 140+ more models. <Link href="/models" className="underline underline-offset-2 hover:text-primary transition-colors">View the full model catalog →</Link>
                </p>
            </section>

            {/* How It Works */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    How Frenix AI Gateway works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Connect", description: "Sign up and get your Frenix API key. Replace your provider's base URL with api.frenix.sh/v1 — that's it." },
                        { step: "02", title: "Route", description: "Send requests with any model name. Frenix identifies the provider, authenticates, and routes to the fastest available endpoint." },
                        { step: "03", title: "Monitor", description: "Track every request in real time. See latency, token usage, costs, and error rates across all providers in one dashboard." },
                    ].map((s, i) => (
                        <div key={i} className="relative">
                            <div className="text-6xl font-black text-white/5 mb-4">{s.step}</div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Frequently asked questions about AI gateways
                </h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                        {
                            q: "What is an AI gateway used for?",
                            a: "An AI gateway is used to centralize access to multiple AI model providers through a single API. It handles routing, authentication, failover, rate limiting, and observability — letting developers focus on building features instead of managing provider integrations."
                        },
                        {
                            q: "Is Frenix compatible with the OpenAI SDK?",
                            a: "Yes. Frenix is 100% compatible with the OpenAI SDK and any OpenAI-compatible client library. Simply change the base URL to api.frenix.sh/v1 and use your Frenix API key. All parameters, streaming, function calling, and response formats work identically."
                        },
                        {
                            q: "Does Frenix store my prompts or completions?",
                            a: "No. Frenix implements a zero-retention policy for request and response payloads. We only store anonymized metadata (token counts, latency, status codes) for billing and observability. Your data is proxied directly to providers via encrypted TLS tunnels."
                        },
                        {
                            q: "How does automatic failover work?",
                            a: "Frenix continuously monitors the health and latency of all upstream providers. If a provider returns an error or becomes unreachable, the gateway automatically retries the request with a comparable model from a different provider — often before your application even notices a problem."
                        },
                        {
                            q: "What latency does the gateway add?",
                            a: "Frenix adds less than 1ms of overhead per request on average. Our edge network and optimized proxy layer ensure that the gateway is nearly invisible in terms of latency impact, especially for streaming requests."
                        },
                        {
                            q: "Can I use Frenix in production?",
                            a: "Absolutely. Frenix is designed for production workloads and offers a 99.7% uptime SLA. Teams use Frenix to power customer-facing AI features, internal tools, AI agents, and automated workflows at scale."
                        },
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
                        Start using the Frenix AI Gateway today
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        150+ models are completely free. No credit card required. No usage caps on free models.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                            Get started free <ArrowRight size={16} />
                        </Link>
                        <Link href="/compare/openrouter-alternative" className="inline-flex items-center gap-2 px-8 py-4 border border-black/10 rounded-2xl font-bold text-sm hover:bg-black/5 transition-colors">
                            Compare with alternatives
                        </Link>
                    </div>
                </div>
            </section>

            {/* Schema.org for AI Gateway */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Frenix AI Gateway",
                        "applicationCategory": "DeveloperApplication",
                        "operatingSystem": "Web",
                        "description": "A unified AI gateway that provides a single API endpoint to access 150+ large language models from OpenAI, Anthropic, Google, Meta, and more.",
                        "url": "https://www.frenix.sh/ai-gateway",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Frenix",
                            "url": "https://www.frenix.sh"
                        }
                    })
                }}
            />
        </div>
    );
}