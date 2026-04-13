import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Rocket, DollarSign, Clock, Shuffle, BarChart3, Key } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Gateway for Startups | Ship Faster with Frenix",
    description: "Frenix helps startups ship AI features faster. One API for 150+ models, free tier included, no vendor lock-in. Switch models without code changes and scale from prototype to production.",
    keywords: ["AI gateway for startups", "startup AI infrastructure", "LLM for startups", "AI API startup", "free AI gateway", "no vendor lock-in AI", "startup AI tools"],
    alternates: { canonical: "https://www.frenix.sh/use-cases/startups" },
    openGraph: {
        title: "AI Gateway for Startups | Frenix",
        description: "Ship AI features faster. One API for 150+ models, free tier, no vendor lock-in.",
        url: "https://www.frenix.sh/use-cases/startups",
        type: "website",
    },
};

export default function StartupsPage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">Startups</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        Ship AI features <span className="text-primary">10x faster</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Startups can&apos;t afford to waste engineering time on provider integrations. Frenix gives you one API for every LLM —
                        so you can prototype with GPT-4o today, switch to Claude tomorrow, and deploy to production without rewriting a single line of code.
                    </p>
                    <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                        Start free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Why startups choose Frenix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { icon: Clock, title: "Ship in hours, not weeks", desc: "Integrate once with Frenix and access every model instantly. No provider SDKs, no separate API keys, no boilerplate." },
                        { icon: Shuffle, title: "Zero vendor lock-in", desc: "Switch between GPT-4o, Claude, Gemini, and Llama by changing a string. Your code stays the same regardless of provider." },
                        { icon: DollarSign, title: "150+ models, all free", desc: "Every model is completely free to use. 10 requests per minute. No credit card required. Scale up only when you need to." },
                        { icon: Rocket, title: "Prototype to production", desc: "The same API you use for prototyping scales to production workloads. No migration needed as your startup grows." },
                        { icon: BarChart3, title: "Built-in analytics", desc: "Track token usage, costs, and latency across all models in real-time. Know exactly what your AI features cost." },
                        { icon: Key, title: "Simple key management", desc: "Create separate API keys for development, staging, and production. Per-key rate limits and usage caps." },
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

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        From idea to production in 3 steps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {[
                            { step: "01", title: "Sign up & get a key", desc: "Create a free account and generate an API key. Takes 30 seconds." },
                            { step: "02", title: "Swap your base URL", desc: "Point your OpenAI SDK or HTTP client to api.frenix.sh/v1. That's it." },
                            { step: "03", title: "Build & iterate", desc: "Use any model by name. Switch models instantly. Ship AI features to users." },
                        ].map((s, i) => (
                            <div key={i}>
                                <div className="text-5xl font-black text-white/5 mb-3">{s.step}</div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-20">
                <div className="p-12 md:p-16 bg-white text-black rounded-[32px] text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 !text-black">
                        Your startup deserves better AI infrastructure
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        150+ models are completely free. No credit card. Access them all through one API.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get started free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}