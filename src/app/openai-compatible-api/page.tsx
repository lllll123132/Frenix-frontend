import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "OpenAI-Compatible API | Use Any LLM with the OpenAI SDK — Frenix",
    description: "Frenix provides a fully OpenAI-compatible API that works with Claude, Gemini, Llama, DeepSeek, and 150+ models. Drop-in replacement — just change your base URL.",
    keywords: ["OpenAI compatible API", "OpenAI proxy", "OpenAI alternative API", "OpenAI SDK compatible", "unified LLM API", "OpenAI base URL", "Claude OpenAI compatible", "Gemini OpenAI format"],
    alternates: { canonical: "https://www.frenix.sh/openai-compatible-api" },
    openGraph: {
        title: "OpenAI-Compatible API for 150+ LLMs | Frenix",
        description: "Use the OpenAI SDK to access Claude, Gemini, Llama, and more. Just swap your base URL.",
        url: "https://www.frenix.sh/openai-compatible-api",
        type: "website",
    },
};

export default function OpenAICompatiblePage() {
    return (
        <div className="min-h-screen">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">OpenAI-Compatible API</span>
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                        Use the <span className="text-primary">OpenAI SDK</span> with any model
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Frenix exposes a fully OpenAI-compatible REST API. Change your base URL to <code className="text-primary font-bold">api.frenix.sh/v1</code> and instantly access Claude, Gemini, Llama, DeepSeek, Mistral, and 150+ models — no SDK changes, no new libraries, no refactoring.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold">
                            Get your API key <ArrowRight size={16} />
                        </Link>
                        <Link href="/docs" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                            <Terminal size={16} /> API Reference
                        </Link>
                    </div>
                </div>
            </section>

            {/* Compatibility */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-foreground">
                    100% OpenAI SDK compatibility
                </h2>
                <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                    Every endpoint, parameter, and response format matches the OpenAI API specification exactly. If it works with OpenAI, it works with Frenix.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        "Chat Completions (streaming & non-streaming)",
                        "Function Calling & Tool Use",
                        "JSON Mode & Structured Outputs",
                        "Vision (image inputs)",
                        "Embeddings",
                        "Text-to-Speech (TTS)",
                        "Image Generation",
                        "Moderations",
                        "Audio Transcription",
                    ].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                            <div className="size-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <Check size={12} className="text-emerald-500" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{f}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Code Examples */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Integration examples
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">Python</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">from</span> openai <span className="text-primary">import</span> OpenAI</div>
                            <div className="mt-2">client = OpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>)</div>
                            <div className="mt-2">resp = client.chat.completions.create(</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;claude-3.5-sonnet&quot;</span>,</div>
                            <div>&nbsp;&nbsp;messages=[{`{"role":"user","content":"Hi"}`}]</div>
                            <div>)</div>
                        </div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">JavaScript / TypeScript</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">import</span> OpenAI <span className="text-primary">from</span> <span className="text-emerald-400/80">&quot;openai&quot;</span>;</div>
                            <div className="mt-2"><span className="text-primary">const</span> client = <span className="text-primary">new</span> OpenAI({`{`}</div>
                            <div>&nbsp;&nbsp;baseURL: <span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;apiKey: <span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span></div>
                            <div>{`}`});</div>
                            <div className="mt-2"><span className="text-primary">const</span> resp = <span className="text-primary">await</span> client.chat.completions.create({`{`}</div>
                            <div>&nbsp;&nbsp;model: <span className="text-emerald-400/80">&quot;gemini-1.5-pro&quot;</span>,</div>
                            <div>&nbsp;&nbsp;messages: [{`{role:"user",content:"Hi"}`}]</div>
                            <div>{`}`});</div>
                        </div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">cURL</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">curl</span> https://api.frenix.sh/v1/chat/completions \</div>
                            <div>&nbsp;&nbsp;-H <span className="text-emerald-400/80">&quot;Authorization: Bearer sk-frenix-...&quot;</span> \</div>
                            <div>&nbsp;&nbsp;-H <span className="text-emerald-400/80">&quot;Content-Type: application/json&quot;</span> \</div>
                            <div>&nbsp;&nbsp;-d <span className="text-emerald-400/80">&apos;{`{"model":"llama-3.1-405b","messages":[{"role":"user","content":"Hi"}]}`}&apos;</span></div>
                        </div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">LangChain</div>
                        <div className="font-mono text-xs text-muted-foreground/80">
                            <div><span className="text-primary">from</span> langchain_openai <span className="text-primary">import</span> ChatOpenAI</div>
                            <div className="mt-2">llm = ChatOpenAI(</div>
                            <div>&nbsp;&nbsp;base_url=<span className="text-emerald-400/80">&quot;https://api.frenix.sh/v1&quot;</span>,</div>
                            <div>&nbsp;&nbsp;api_key=<span className="text-emerald-400/80">&quot;sk-frenix-...&quot;</span>,</div>
                            <div>&nbsp;&nbsp;model=<span className="text-emerald-400/80">&quot;gpt-4o&quot;</span></div>
                            <div>)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-[1200px] mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-12 text-foreground">
                    Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                        { q: "Do I need to change my code?", a: "No. If you're already using the OpenAI SDK, just change the base URL and API key. All your existing code — including streaming, function calling, and tool use — works without modification." },
                        { q: "Which models can I access?", a: "All 150+ free models in the Frenix catalog, including GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.1 405B, DeepSeek V3, Mistral Large, and many more. Over 150+ models are completely free to use. Simply change the model parameter." },
                        { q: "Does streaming work?", a: "Yes. Server-Sent Events (SSE) streaming is fully supported and works identically to the OpenAI API. Both the Python and JavaScript SDKs' streaming helpers work out of the box." },
                        { q: "Can I use this with LangChain or LlamaIndex?", a: "Yes. Any framework that supports the OpenAI API format (LangChain, LlamaIndex, AutoGen, CrewAI, Vercel AI SDK) works with Frenix by simply setting the base URL." },
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
                        Swap your base URL. Access every model.
                    </h2>
                    <p className="!text-black/60 text-base mb-8 max-w-lg mx-auto">
                        Free tier includes 10 requests per minute. Works with the OpenAI SDK, LangChain, and any HTTP client.
                    </p>
                    <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get started free <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}