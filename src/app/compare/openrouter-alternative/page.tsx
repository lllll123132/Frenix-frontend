import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
    title: "Frenix vs OpenRouter | Best OpenRouter Alternative 2026",
    description: "Compare Frenix and OpenRouter side by side. See why teams switch to Frenix for faster routing, lower latency, zero data retention, and better uptime across 150+ LLMs.",
    keywords: ["OpenRouter alternative", "Frenix vs OpenRouter", "OpenRouter competitor", "better than OpenRouter", "AI gateway comparison", "LLM router comparison", "OpenRouter pricing"],
    alternates: { canonical: "https://www.frenix.sh/compare/openrouter-alternative" },
    openGraph: {
        title: "Frenix vs OpenRouter — Detailed Comparison | 2026",
        description: "Lower latency, zero data retention, and 150+ models. See why developers switch from OpenRouter to Frenix.",
        url: "https://www.frenix.sh/compare/openrouter-alternative",
        type: "website",
    },
};

const comparison = [
    { feature: "Supported Models", frenix: "150+ (all free)", openrouter: "200+", winner: "frenix" },
    { feature: "Proxy Latency Overhead", frenix: "<1ms", openrouter: "~100-200ms", winner: "frenix" },
    { feature: "OpenAI SDK Compatible", frenix: true, openrouter: true, winner: "tie" },
    { feature: "Anthropic API Compatible", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Zero Data Retention", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Automatic Failover", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Function Calling / Tools", frenix: true, openrouter: true, winner: "tie" },
    { feature: "Streaming (SSE)", frenix: true, openrouter: true, winner: "tie" },
    { feature: "Image Generation", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Video Generation", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Text-to-Speech", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Embeddings", frenix: true, openrouter: true, winner: "tie" },
    { feature: "Per-Key Rate Limits", frenix: true, openrouter: false, winner: "frenix" },
    { feature: "Real-Time Dashboard", frenix: true, openrouter: true, winner: "tie" },
    { feature: "Free Tier", frenix: "150+ free models, 10 RPM", openrouter: "Limited free models", winner: "frenix" },
];

function CellValue({ value, winner }: { value: boolean | string; winner: string }) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex items-center gap-1.5">
                <div className="size-5 rounded-full bg-emerald-500/10 flex items-center justify-center"><Check size={12} className="text-emerald-500" /></div>
                <span className="text-sm text-foreground">Yes</span>
            </div>
        ) : (
            <div className="flex items-center gap-1.5">
                <div className="size-5 rounded-full bg-rose-500/10 flex items-center justify-center"><X size={12} className="text-rose-500" /></div>
                <span className="text-sm text-muted-foreground">No</span>
            </div>
        );
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export default function OpenRouterAlternativePage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/compare/openrouter-alternative" className="hover:text-primary transition-colors">Compare</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">vs OpenRouter</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        Frenix vs OpenRouter:{" "}
                        <span className="text-primary">the faster, more secure alternative</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Both Frenix and OpenRouter let you access multiple LLMs through a single API. But Frenix is built for production —
                        with sub-1ms proxy overhead, zero data retention, automatic failover, and native support for images, video, and TTS
                        that OpenRouter doesn&apos;t offer.
                    </p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-foreground">
                    Feature-by-feature comparison
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 pr-6 text-sm font-bold text-muted-foreground">Feature</th>
                                <th className="py-4 px-6 text-sm font-bold text-primary">Frenix</th>
                                <th className="py-4 px-6 text-sm font-bold text-muted-foreground">OpenRouter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((row, i) => (
                                <tr key={i} className={`border-b border-white/5 ${row.winner === "frenix" ? "bg-primary/[0.02]" : ""}`}>
                                    <td className="py-4 pr-6 text-sm text-foreground font-medium">{row.feature}</td>
                                    <td className="py-4 px-6"><CellValue value={row.frenix} winner={row.winner} /></td>
                                    <td className="py-4 px-6"><CellValue value={row.openrouter} winner={row.winner} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Key Differences */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Why teams switch from OpenRouter to Frenix
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "100x lower proxy latency",
                            desc: "Frenix adds less than 1ms of overhead per request. OpenRouter typically adds 100-200ms. For streaming applications and agent chains, this difference compounds significantly."
                        },
                        {
                            title: "Zero data retention",
                            desc: "Frenix never stores your prompts or completions. OpenRouter stores request data for analytics and debugging. For teams handling sensitive data, this is a critical difference."
                        },
                        {
                            title: "Automatic failover",
                            desc: "When a provider goes down, Frenix automatically reroutes to a comparable model. OpenRouter returns the upstream error, requiring you to handle failover in your application code."
                        },
                        {
                            title: "Multi-modal by default",
                            desc: "Frenix natively supports image generation (DALL-E, Flux), video generation (Veo), and text-to-speech — all through the same API key. OpenRouter is text-only."
                        },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Migration */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        Migrate from OpenRouter in 2 minutes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>
                                Both Frenix and OpenRouter use the OpenAI-compatible API format. To migrate, simply replace
                                your OpenRouter base URL and API key with Frenix credentials.
                            </p>
                            <p>
                                All your existing code — including model names, streaming, function calling, and structured outputs — works without any changes.
                                Most teams complete the migration in under 2 minutes.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div className="opacity-50 mb-2"># Before (OpenRouter)</div>
                            <div className="text-rose-400/60 line-through">base_url=&quot;https://openrouter.ai/api/v1&quot;</div>
                            <div className="text-rose-400/60 line-through mb-4">api_key=&quot;sk-or-...&quot;</div>
                            <div className="opacity-50 mb-2"># After (Frenix)</div>
                            <div className="text-emerald-400/80">base_url=&quot;https://api.frenix.sh/v1&quot;</div>
                            <div className="text-emerald-400/80">api_key=&quot;sk-frenix-...&quot;</div>
                            <div className="mt-4 opacity-50"># Everything else stays the same ✓</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1200px] mx-auto px-6 pb-20">
                <div className="p-12 md:p-16 bg-white text-black rounded-[32px] text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 !text-black">
                        Ready to switch from OpenRouter?
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        150+ models are completely free. Migrate in under 2 minutes with zero code changes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                            Start free migration <ArrowRight size={16} />
                        </Link>
                        <Link href="/ai-gateway" className="inline-flex items-center gap-2 px-8 py-4 border border-black/10 rounded-2xl font-bold text-sm hover:bg-black/5 transition-colors">
                            Learn more about Frenix
                        </Link>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Frenix vs OpenRouter: The Best OpenRouter Alternative in 2026",
                        "description": "A detailed comparison of Frenix and OpenRouter AI gateways, covering latency, features, pricing, and security.",
                        "author": { "@type": "Organization", "name": "Frenix" },
                        "publisher": { "@type": "Organization", "name": "Frenix", "url": "https://www.frenix.sh" },
                        "url": "https://www.frenix.sh/compare/openrouter-alternative"
                    })
                }}
            />
        </div>
    );
}