import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Anthropic Claude Integration | Access Claude Opus, Sonnet, Haiku via Frenix",
    description: "Access Anthropic Claude 3.5 Sonnet, Claude Opus, Claude Haiku, and all Claude models through Frenix. OpenAI-compatible and native Anthropic API format supported. Automatic failover to GPT-4o or Gemini.",
    keywords: ["Claude API proxy", "Anthropic gateway", "Claude 3.5 Sonnet proxy", "Claude Opus API", "Claude Haiku API", "Anthropic failover", "Claude API alternative"],
    alternates: { canonical: "https://www.frenix.sh/integrations/anthropic" },
    openGraph: {
        title: "Anthropic Claude Integration via Frenix Gateway",
        description: "Access Claude Opus, Sonnet, and Haiku with enhanced reliability and automatic failover.",
        url: "https://www.frenix.sh/integrations/anthropic",
        type: "website",
    },
};

export default function AnthropicIntegrationPage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/integrations/anthropic" className="hover:text-primary transition-colors">Integrations</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">Anthropic</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        Anthropic Claude with <span className="text-primary">zero-downtime guarantee</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Route to every Anthropic model through Frenix — Claude 3.5 Sonnet, Claude Opus, Claude Haiku, and future releases.
                        Frenix supports both the OpenAI-compatible format and native Anthropic Messages API format. When Claude has issues,
                        Frenix can automatically fail over to GPT-4o or Gemini.
                    </p>
                    <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                        Start using Claude via Frenix <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-foreground">
                    Available Claude models
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { name: "Claude 3.5 Sonnet", desc: "Best balance of intelligence and speed. 200K context." },
                        { name: "Claude 3 Opus", desc: "Most capable model for complex reasoning." },
                        { name: "Claude 3 Haiku", desc: "Fastest Claude model for high-throughput tasks." },
                        { name: "Claude 3.5 Haiku", desc: "Improved speed with better quality." },
                        { name: "Claude 3 Sonnet", desc: "Previous gen balanced model." },
                        { name: "Claude Instant", desc: "Legacy fast model." },
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
                    Two ways to access Claude
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <h3 className="text-lg font-bold text-foreground mb-3">OpenAI-Compatible Format</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Use the OpenAI SDK and set <code className="text-primary font-bold">model=&quot;claude-3.5-sonnet&quot;</code>.
                            Frenix automatically translates between OpenAI and Anthropic API formats.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div>client = OpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>)</div>
                            <div className="mt-2">client.chat.completions.create(</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;claude-3.5-sonnet&quot;</span>, ...</div>
                            <div>)</div>
                        </div>
                    </div>
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <h3 className="text-lg font-bold text-foreground mb-3">Native Anthropic Format</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Use the Anthropic SDK or Messages API format directly. Send requests to <code className="text-primary font-bold">api.frenix.sh/anthropic/v1/messages</code>.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-muted-foreground/80">
                            <div>client = Anthropic(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/anthropic&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>)</div>
                            <div className="mt-2">client.messages.create(</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;claude-3-5-sonnet-latest&quot;</span>, ...</div>
                            <div>)</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-foreground">
                    Why route Claude through Frenix?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Automatic failover to GPT-4o/Gemini during Claude outages",
                        "Both OpenAI and native Anthropic API formats supported",
                        "Unified billing across Claude and all other models",
                        "Zero data retention — your conversations stay private",
                        "200K context window fully supported with streaming",
                        "Tool use and function calling work out of the box",
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

            <section className="max-w-[1200px] mx-auto px-6 pb-20">
                <div className="p-12 md:p-16 bg-white text-black rounded-[32px] text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 !text-black">
                        Access Claude with enhanced reliability
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        Both Anthropic and OpenAI SDK formats. All 150+ models are completely free.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get started free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}