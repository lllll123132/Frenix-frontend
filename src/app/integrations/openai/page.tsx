import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "OpenAI Integration | Access GPT-4o, o1, o3 via Frenix Gateway",
    description: "Access OpenAI GPT-4o, GPT-4 Turbo, o1, o3, DALL-E, Whisper, and TTS models through Frenix. Same OpenAI SDK, enhanced with failover, observability, and multi-provider routing.",
    keywords: ["OpenAI API proxy", "GPT-4o proxy", "OpenAI gateway", "GPT-4 API", "OpenAI failover", "OpenAI load balancer", "o1 API access", "o3 API"],
    alternates: { canonical: "https://www.frenix.sh/integrations/openai" },
    openGraph: {
        title: "OpenAI Integration via Frenix Gateway",
        description: "Access GPT-4o, o1, o3, DALL-E, and all OpenAI models with enhanced reliability and observability.",
        url: "https://www.frenix.sh/integrations/openai",
        type: "website",
    },
};

export default function OpenAIIntegrationPage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/integrations/openai" className="hover:text-primary transition-colors">Integrations</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">OpenAI</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        OpenAI models with <span className="text-primary">production-grade reliability</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Route to every OpenAI model through Frenix — GPT-4o, GPT-4 Turbo, o1, o3, DALL-E 3, Whisper, and TTS.
                        Get automatic failover, usage tracking, and the ability to fall back to Claude or Gemini when OpenAI has issues.
                    </p>
                    <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                        Start using OpenAI via Frenix <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-foreground">
                    Available OpenAI models
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { name: "GPT-4o", desc: "Flagship multimodal model. Text, vision, audio." },
                        { name: "GPT-4o Mini", desc: "Fast and affordable for simple tasks." },
                        { name: "GPT-4 Turbo", desc: "128K context, strong reasoning." },
                        { name: "o1", desc: "Advanced reasoning with chain-of-thought." },
                        { name: "o3", desc: "Latest reasoning model." },
                        { name: "o3-mini", desc: "Fast reasoning at lower cost." },
                        { name: "DALL-E 3", desc: "State-of-the-art image generation." },
                        { name: "Whisper", desc: "Audio transcription and translation." },
                        { name: "TTS / TTS-HD", desc: "Natural text-to-speech voices." },
                        { name: "text-embedding-3-large", desc: "High-quality embeddings." },
                        { name: "text-embedding-3-small", desc: "Efficient embeddings." },
                        { name: "text-moderation-latest", desc: "Content moderation." },
                    ].map((m, i) => (
                        <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl">
                            <h3 className="text-sm font-bold text-foreground mb-1">{m.name}</h3>
                            <p className="text-xs text-muted-foreground">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-foreground">
                    Why route OpenAI through Frenix?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Automatic failover to Claude/Gemini when OpenAI is down",
                        "Unified dashboard for all model usage and costs",
                        "Per-key rate limits and usage caps",
                        "Zero data retention — prompts are never stored",
                        "Sub-1ms proxy overhead on top of OpenAI latency",
                        "Same OpenAI SDK — just change the base URL",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                            <div className="size-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <Check size={12} className="text-emerald-500" />
                            </div>
                            <span className="text-sm text-foreground">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-foreground">
                        Quick start
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>Already using the OpenAI SDK? Change two lines:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Set <code className="text-primary font-bold">base_url</code> to <code className="text-primary font-bold">https://api.frenix.sh/v1</code></li>
                                <li>Set <code className="text-primary font-bold">api_key</code> to your Frenix key</li>
                            </ol>
                            <p>Everything else — model names, parameters, streaming, function calling — stays exactly the same.</p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">from</span> openai <span className="text-primary">import</span> OpenAI</div>
                            <div className="mt-2">client = OpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>)</div>
                            <div className="mt-3">resp = client.chat.completions.create(</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;gpt-4o&quot;</span>,</div>
                            <div>&nbsp;&nbsp;messages=[{`{"role":"user","content":"Hello"}`}]</div>
                            <div>)</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-20">
                <div className="p-12 md:p-16 bg-white text-black rounded-[32px] text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 !text-black">
                        Access OpenAI with enhanced reliability
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        Same SDK, better infrastructure. All 150+ models are completely free.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get started free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}