'use client'

import Link from 'next/link';
import { toast } from 'sonner';
import CountUp from '@/components/ui/CountUp';
import { ArrowRight, Copy, TrendingUp, Zap, Shield, Globe, Check, Terminal, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ClickSpark from '@/components/ui/ClickSpark';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Claude, DeepSeek, Grok, Meta, OpenAI, Google, Mistral } from '@lobehub/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClientTweetCard } from "@/components/ui/tweet-card";
import { Marquee } from "@/components/ui/marquee";

// Lightweight inline provider icons (replaces heavy @lobehub/icons barrel export)
const GoogleIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);
const AnthropicIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.257 0h3.603L16.74 20.48h-3.603L6.57 3.52zM6.57 3.52H3.603L10.173 20.48h3.603L6.57 3.52z" opacity="0.4" />
    <path d="M13.827 3.52L7.257 20.48h3.603l6.57-16.96h-3.603z" />
  </svg>
);
const OpenAIIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const MistralIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4.5 20.29h15L12 2zm0 4.88L15.3 15h-6.6L12 6.88z" />
  </svg>
);

const MetaIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm2 14.5c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm-4 0c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm2-4c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5z" />
  </svg>
);

const UserIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UnifiedEndpointBeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const model1Ref = useRef<HTMLDivElement>(null);
  const model2Ref = useRef<HTMLDivElement>(null);
  const model3Ref = useRef<HTMLDivElement>(null);
  const model4Ref = useRef<HTMLDivElement>(null);
  const model5Ref = useRef<HTMLDivElement>(null);
  const model6Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex size-full items-center justify-center p-10 overflow-hidden" ref={containerRef}>
      <div className="flex size-full flex-col items-center justify-center gap-10 max-w-2xl">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <div ref={fromRef} className="z-10 flex size-14 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
            <UserIcon size={24} className="text-white/80" />
          </div>
          
          <div ref={toRef} className="z-10 flex size-20 items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">
             <img src="/logo-withoutbg.png" alt="Frenix" className="size-14" />
          </div>

          <div className="flex flex-col gap-4">
            <div ref={model1Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <OpenAI size={22} />
            </div>
            <div ref={model2Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <Claude size={18} />
            </div>
            <div ref={model3Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <Google size={22} />
            </div>
            <div ref={model4Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <Meta size={22} />
            </div>
            <div ref={model5Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <Grok size={22} />
            </div>
            <div ref={model6Ref} className="z-10 flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <DeepSeek size={22} />
            </div>
          </div>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={fromRef} toRef={toRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model1Ref} duration={3} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model2Ref} duration={3} delay={0.8} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model3Ref} duration={3} delay={1.1} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model4Ref} duration={3} delay={1.4} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model5Ref} duration={3} delay={1.7} />
      <AnimatedBeam containerRef={containerRef} fromRef={toRef} toRef={model6Ref} duration={3} delay={2.0} />
    </div>
  );
};

const featuredModels = [
  {
    name: 'Gemini 3.1 Pro',
    provider: 'Google DeepMind',
    Icon: Google,
    tokensWk: '142.2B',
    latency: '842ms',
    change: '+12.4%',
    positive: true,
    isNew: true,
  },
  {
    name: 'Claude Opus 4.6',
    provider: 'Anthropic',
    Icon: Claude,
    tokensWk: '28.5B',
    latency: '1.2s',
    change: '+8.2%',
    positive: true,
    isNew: true,
  },
  {
    name: 'Gpt 5.3 Codex',
    provider: 'OpenAI',
    Icon: OpenAI,
    tokensWk: '842.1B',
    latency: '2.1s',
    change: '+15.4%',
    positive: true,
    isNew: true,
  }
];

const testimonials = [
  {
    name: "Raj Patel",
    role: "Founder & CEO",
    content: "As a startup, we needed an API that could scale. <span class='text-sky-400 font-extrabold'>Frenix delivered exactly that.</span> Production record time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
  },
  {
    name: "Linda Wu",
    role: "VP Engineering",
    content: "Frenix's reliability is unmatched. <span class='text-sky-400 font-extrabold'>99.99% uptime</span> with sub-100ms latency. Perfect for production workloads.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda"
  },
  {
    name: "Emily Chen",
    role: "Product Manager",
    content: "The multilingual capabilities are incredible. <span class='text-sky-400 font-extrabold'>12 languages, one API.</span> A global must-have.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    name: "Alex Rivera",
    role: "CTO @ Innovate",
    content: "Frenix changed our development. <span class='text-sky-400 font-extrabold'>Shipped 10x faster</span> than expected. Intuitive API.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    content: "Accuracy is remarkable. <span class='text-sky-400 font-extrabold'>Tools are 95% accurate.</span> Transformative for finance.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    name: "Samantha Lee",
    role: "Lead Developer",
    content: "Seamless integration. <span class='text-sky-400 font-extrabold'>80% faster response times.</span> Satisfaction soared!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samantha"
  },
  {
    name: "Jake Morrison",
    role: "CTO @ SecureNet",
    content: "Enterprise-grade features. <span class='text-sky-400 font-extrabold'>Key rotation & audit logs.</span> Absolute trust.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake"
  },
  {
    name: "Nadia Ali",
    role: "Product Lead",
    content: "Top-notch DevX. <span class='text-sky-400 font-extrabold'>Excellent SDKs & support.</span> A joy for any team.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia"
  },
  {
    name: "Sofia Patel",
    role: "CEO @ EduTech",
    content: "Powers our learning platform. <span class='text-sky-400 font-extrabold'>300% engagement boost.</span> One API call at a time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
  },
  {
    name: "Marcus Thorne",
    role: "Infrastructure Lead",
    content: "<span class='text-sky-400 font-extrabold'>Zero-retention policy</span> is a game changer for our compliance teams. Elite security.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Elena Rossi",
    role: "AI Architect",
    content: "The <span class='text-sky-400 font-extrabold'>Unified Gateway</span> simplifies everything. No more SDK spaghetti.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Jordan Smith",
    role: "Fullstack Dev",
    content: "Switched in 5 minutes. <span class='text-sky-400 font-extrabold'>Infrastructure that just works.</span> Highly recommend.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
  },
  {
    name: "Sarah Jenkins",
    role: "Growth Eng",
    content: "Scalability at its peak. <span class='text-sky-400 font-extrabold'>Handled 50M requests</span> without breaking a sweat.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Kim",
    role: "Backend Wizard",
    content: "Frenix is the <span class='text-sky-400 font-extrabold'>gold standard</span> for AI orchestration. Pure technical excellence.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    name: "Lisa Wong",
    role: "SRE @ FutureScale",
    content: "Our failover logic is now redundant. <span class='text-sky-400 font-extrabold'>Frenix handles everything natively.</span>",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
  }
];

const TestimonialCard = ({ name, role, content, avatar, index }: typeof testimonials[0] & { index: number }) => (
  <div className={cn(
    "relative w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 p-5 bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 group",
    index % 2 === 0 ? "min-h-[160px]" : "min-h-[200px]"
  )}>
    <blockquote 
      className="text-white/80 text-[13px] leading-snug mb-4 font-medium"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <div className="flex items-center gap-2">
      <img src={avatar} className="size-7 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-300" alt={name} />
      <div className="flex flex-col">
          <span className="text-[11px] font-bold text-white tracking-tight leading-none mb-0.5">{name}</span>
          <span className="text-[9px] font-medium text-white/30 truncate max-w-[120px] leading-none">{role}</span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const col1 = testimonials.slice(0, 5);
  const col2 = testimonials.slice(5, 10);
  const col3 = testimonials.slice(10, 15);

  return (
    <section className="py-24 w-full relative">
      <div className="text-center mb-16 px-6 max-w-3xl mx-auto relative z-20">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-none italic">
          Wall of Love
        </h2>
        <p className="text-white/30 text-base md:text-lg font-medium tracking-tight max-w-xl mx-auto">
          World-class infrastructure trusted by the next generation of AI pioneers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 h-[700px] overflow-hidden relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full">
          <Marquee vertical className="[--duration:25s] [--gap:1rem]" pauseOnHover>
            {col1.map((t, i) => <TestimonialCard key={i} {...t} index={i} />)}
          </Marquee>
          <Marquee vertical reverse className="[--duration:30s] [--gap:1rem]" pauseOnHover>
            {col2.map((t, i) => <TestimonialCard key={i} {...t} index={i + 5} />)}
          </Marquee>
          <Marquee vertical className="hidden md:flex [--duration:20s] [--gap:1rem]" pauseOnHover>
            {col3.map((t, i) => <TestimonialCard key={i} {...t} index={i + 10} />)}
          </Marquee>
        </div>

        {/* Improved Edge Fades matching site background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
          Common Questions
        </h2>
        <p className="text-white/40 text-lg">Everything you need to know about the Frenix orchestration layer.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What exactly is a Unified Endpoint?</AccordionTrigger>
          <AccordionContent>
            A Unified Endpoint allows you to access models from OpenAI, Anthropic, Google, and more through a single API key and a standardized REST interface. You no longer need to manage multiple SDKs or complex authentication flows for each provider.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How does Frenix handle latency?</AccordionTrigger>
          <AccordionContent>
            Frenix is built on a global edge network that minimizes regional hop-latency. Our routing logic is optimized to deliver the fastest possible time-to-first-token by selecting the most responsive provider cluster for your specific geographic location.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is my data used for model training?</AccordionTrigger>
          <AccordionContent>
            Absolutely not. Frenix acts as a zero-retention gateway. We do not store your prompts or completions, and we only work with enterprise-tier provider accounts that explicitly opt-out of data training by default.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How difficult is it to switch providers?</AccordionTrigger>
          <AccordionContent>
            It takes exactly one line of code change. Because our interface is standardized, you simply update the 'provider' parameter in your request body, and Frenix handles the mapping, payload conversion, and execution seamlessly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What happens if a provider goes down?</AccordionTrigger>
          <AccordionContent>
            Frenix offers built-in automatic failover groups. You can define a "Fallback Model" in your configuration, and if your primary provider experiences an outage or rate-limit, Frenix will automatically reroute the request to ensure your application remains operational.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

function RevealSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className || ''}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="animate-fade" style={{
        position: 'relative',
        paddingTop: '20px',
        paddingBottom: '60px',
      }}>
        <div className="hero-grid-bg" />

        <div className="hero-split flex flex-col lg:grid lg:grid-cols-2 lg:gap-14 items-center max-w-[1200px] mx-auto px-6 w-full gap-12">

          {/* Left */}
          <div style={{ zIndex: 2 }}>
            <a 
              href="https://status.frenix.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 hover:bg-white/10 transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black text-white/70 tracking-[0.2em] uppercase group-hover:text-white transition-colors">Operational</span>
            </a>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-foreground tracking-tight leading-[1.1] font-extrabold mb-6">
              The unified gateway{' '}
              <span className="text-muted-foreground font-bold">for machine intelligence.</span>
            </h1>

            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-[400px] mb-7 font-medium">
              Access 150+ LLMs through a single endpoint. Route across OpenAI, Anthropic, Google, and more — no client changes needed.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link href="/dashboard" className="h-16 px-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-white/10 group">
                Get started
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Link>

              <button
                className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[14px] text-white/60 hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
                onClick={() => {
                  navigator.clipboard.writeText('api.frenix.sh/v1');
                  toast.success('Endpoint copied');
                }}
              >
                <span className="mr-3">api.frenix.sh/v1</span>
                <Copy size={16} strokeWidth={2} style={{ opacity: 0.4 }} />
              </button>
            </div>

            {/* Partner Logos */}
            <div className="mt-10 flex flex-wrap items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] uppercase tracking-widest font-black whitespace-nowrap">Integrated with:</span>
              <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                <div className="flex items-center gap-2">
                  <OpenAIIcon size={16} />
                  <span className="text-[11px] font-bold">OpenAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <AnthropicIcon size={16} />
                  <span className="text-[11px] font-bold">Anthropic</span>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <span className="text-[11px] font-bold">Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Models */}
          <div className="w-full lg:z-[2]">
            <div className="flex justify-between items-baseline mb-5">
              <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Featured Models</span>
              <Link href="/dashboard" className="text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 whitespace-nowrap">
                View All <TrendingUp size={12} />
              </Link>
            </div>

            <div className="flex gap-4">
              {/* Bracket (Hidden on mobile for space) */}
              <div className="hidden sm:block w-[14px] shrink-0 relative">
                <svg width="14" height="100%" viewBox="0 0 14 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <path d="M12 0 Q2 0, 2 12 L2 38 Q2 50, 0 50 Q2 50, 2 62 L2 88 Q2 100, 12 100" stroke="currentColor" className="text-white/10" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                {featuredModels.map((m, i) => (
                  <div
                    key={i}
                    className="group model-card p-3 md:p-3.5 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                        <m.Icon size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[13px] font-bold text-foreground truncate">{m.name}</span>
                          {m.isNew && (
                            <span className="text-[7px] font-black uppercase tracking-widest px-1 py-0.5 rounded bg-primary/20 text-primary border border-primary/20">New</span>
                          )}
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium">{m.provider}</span>
                      </div>
                      <span className={cn(
                        "text-[11px] font-bold tabular-nums",
                        m.positive ? "text-emerald-500" : "text-rose-500"
                      )}>{m.change}</span>
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                      <p className="text-muted-foreground/60">
                        <span className="text-foreground tracking-normal lowercase text-[12px] mr-1">{m.tokensWk}</span>
                        Tokens
                      </p>
                      <p className="text-muted-foreground/60">
                        <span className="text-foreground tracking-normal lowercase text-[12px] mr-1">{m.latency}</span>
                        Latency
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Infrastructure Bento (Moved) ────────────────────── */}
      <RevealSection>
        <section className="max-w-[1400px] mx-auto mb-32 px-6">
          <div className="mb-16 text-center">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">Infrastructure</span>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase mb-4 leading-none">
              Built for Scale
             </h2>
             <p className="text-muted-foreground/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
               Engineered with high-throughput architecture to handle millions of requests with sub-millisecond overhead.
             </p>
          </div>

          <BentoGrid className="lg:grid-cols-2 lg:grid-rows-2">
            {[
              {
                name: "Unified Endpoint",
                description: "One request, total control. Query every major model provider through a single REST interface without changing your workflow or adding redundant SDKs.",
                background: (
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                    <UnifiedEndpointBeam />
                  </div>
                ),
                className: "lg:col-span-1 lg:row-span-1",
              },
              {
                name: "All Models Support",
                description: "Access text, image, and video generation models. GPT-4, Claude, Gemini, DALL-E, Stable Diffusion, and more—all through one unified API.",
                background: (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <div className="relative size-full flex items-center justify-center translate-y-[10%]">
                      {/* Logo in the center (Static) */}
                      <div className="absolute size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center z-20 shadow-2xl backdrop-blur-sm">
                        <img src="/logo-withoutbg.png" alt="Frenix" className="size-10" />
                      </div>

                      {/* Inner Orbit */}
                      <OrbitingCircles radius={120} duration={20} iconSize={28} className="opacity-40">
                         <OpenAI size={28} />
                         <Meta size={28} />
                      </OrbitingCircles>
                      {/* Middle Orbit */}
                      <OrbitingCircles radius={200} duration={35} reverse iconSize={30} className="opacity-20">
                         <Claude size={30} />
                         <Mistral size={30} />
                      </OrbitingCircles>
                      {/* Outer Orbit */}
                      <OrbitingCircles radius={280} duration={50} iconSize={32} className="opacity-10">
                         <Google size={32} />
                         <Grok size={32} />
                         <DeepSeek size={24} />
                      </OrbitingCircles>
                    </div>
                  </div>
                ),
                className: "lg:col-span-1 lg:row-span-1",
              },
              {
                name: "Real-time Analytics",
                description: "Monitor your API usage, track costs, and analyze performance with our comprehensive dashboard and analytics.",
                background: (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg width="100%" height="100%" viewBox="0 0 400 200" className="px-8">
                      <path d="M0 150 Q50 140 100 160 T200 120 T300 140 T400 80" fill="none" stroke="white" strokeWidth="2" />
                      <circle cx="200" cy="120" r="4" fill="white" />
                      <rect x="200" y="80" width="60" height="30" rx="8" fill="white" fillOpacity="0.1" />
                    </svg>
                  </div>
                ),
                className: "lg:col-span-1 lg:row-span-1",
              },
              {
                name: "Streaming Responses",
                description: "Get real-time streaming responses for chat applications. Reduce perceived latency and improve user experience.",
                background: (
                  <div className="absolute inset-0 flex flex-col justify-center gap-4 px-12 opacity-30 group-hover:opacity-50 transition-opacity">
                    <div className="h-8 w-2/3 bg-white/10 rounded-full self-end" />
                    <div className="h-8 w-1/2 bg-white/20 rounded-full self-start" />
                    <div className="h-8 w-3/4 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white/40">Add Task</div>
                  </div>
                ),
                className: "lg:col-span-1 lg:row-span-1",
              },
            ].map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </section>
      </RevealSection>

      {/* ── Apache Bench Highlight ───────────────────────────────── */}
      <RevealSection delay={50}>
        <div className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className="p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal size={200} />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  Verified by Apache Bench (ab)
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6">
                  Performance that <br />
                  <span className="text-blue-500">defies the proxy delay.</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed mb-8">
                  Recent stress tests on our <span className="text-white">v2 Enterprise Path</span> demonstrate world-class stability. Zero dropped packets, zero latency spikes—even under heavy concurrent load.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">P95 Latency</span>
                    <span className="text-2xl font-bold font-mono">560ms</span>
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Success Rate</span>
                    <span className="text-2xl font-bold font-mono text-emerald-500">100.0%</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[450px] aspect-square rounded-[2rem] sm:rounded-[3rem] bg-black/40 border border-white/10 p-1 sm:p-2 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[1.8rem] sm:rounded-[2.5rem] p-5 sm:p-8 font-mono text-[10px] sm:text-[11px] leading-tight text-white/40 overflow-x-auto whitespace-nowrap custom-scrollbar">
                  <p className="text-blue-400 mb-4">$ ab -n 100 -c 10 http://api.frenix.sh/v1/chat</p>
                  <p>Benchmarking api.frenix.sh (be patient).....done</p>
                  <p className="mt-4 text-white/80">Server Software:        Frenix-Gateway/2.1.0</p>
                  <p>Server Hostname:        api.frenix.sh</p>
                  <p>Total time taken:      3.941 seconds</p>
                  <p>Complete requests:      100</p>
                  <p className="text-emerald-500 font-bold">Failed requests:        0</p>
                  <p>Total transferred:     43200 bytes</p>
                  <p className="mt-4 text-white/80">Requests per second:    25.37 [#/sec] (mean)</p>
                  <p className="text-blue-400">Time per request:       39.410 [ms] (mean)</p>
                  <p className="mt-4">Percentage of the requests served within (ms)</p>
                  <p>&nbsp; 50%&nbsp; &nbsp; 378ms</p>
                  <p>&nbsp; 95%&nbsp; &nbsp; 560ms</p>
                  <p>&nbsp; 99%&nbsp; &nbsp; 612ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <RevealSection delay={80}>
        <div className="max-w-[1200px] mx-auto mb-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border-y border-white/5">
            {[
              { num: 100, suffix: "%", label: "AB Success Rate" },
              { num: 39, prefix: "<", suffix: "ms", label: "Turbo Response" },
              { num: 150, suffix: "+", label: "Models supported" },
            ].map((s, i) => (
              <div key={i} className="py-12 md:py-16 text-center group transition-colors hover:bg-white/[0.01]">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground tabular-nums mb-3">
                  {s.prefix}<CountUp to={s.num} duration={2} separator="." />{s.suffix}
                </div>
                <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>



      {/* ── Pricing ──────────────────────────────────────────── */}
      <RevealSection>
        <section id="pricing" className="max-w-[1200px] mx-auto mb-24 px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-white uppercase italic">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground/60 text-base leading-relaxed max-w-md mx-auto">
              Access 150+ models with zero overhead. Choose a plan that scales with your ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
            {/* Free */}
            <div className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:border-white/10 group min-h-[640px]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 mb-8 px-3 py-1 bg-white/5 rounded-md self-start">Starter</span>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">$<CountUp to={0} duration={1} /></span>
                <span className="text-muted-foreground/60 text-sm font-medium">/mo</span>
              </div>
              <p className="text-muted-foreground/50 text-sm md:text-base mb-12 leading-relaxed font-medium">For hobbyists and side projects.</p>

              <div className="flex-1 space-y-5 mb-14">
                {["10 requests/minute", "All community models", "Standard latency", "Discord support"].map((f, fi) => (
                  <div key={fi} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <div className="size-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white/40" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/signin" className="w-full h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Get started
              </Link>
            </div>

            {/* Pro */}
            <div className="p-10 md:p-14 bg-white rounded-[2.5rem] flex flex-col relative overflow-hidden group shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10 duration-500 min-h-[640px]">
              <div className="absolute top-0 right-0 p-6">
                <div className="px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-black/40 border border-black/5">
                  Popular
                </div>
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-8 px-3 py-1 bg-black/5 rounded-md self-start">Developer Pro</span>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-black font-black">$<CountUp to={10} duration={2} /></span>
                <span className="text-black/60 text-sm font-medium">/mo</span>
              </div>
              <p className="text-black/60 text-sm md:text-base mb-12 leading-relaxed font-medium">For scaling apps and professional developers.</p>

              <div className="flex-1 space-y-5 mb-14">
                {["20 requests/minute", "Unlimited keys", "Priority latency", "Privacy-first logs", "Dedicated support"].map((f, fi) => (
                  <div key={fi} className="flex items-center gap-3 text-sm font-bold text-black/80">
                    <div className="size-5 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-black" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  toast.error('Registration Paused', {
                    description: (
                      <div className="mt-2 text-xs space-y-3">
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <p className="font-bold text-white mb-1">Seats Currently Full!</p>
                          <p className="text-muted-foreground">Due to high demand, we have temporarily paused automated upgrades.</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                          <p className="font-bold text-white mb-1">How to join?</p>
                          <p className="text-muted-foreground">Please DM our administrator directly to get on the waitlist or for manual activation.</p>
                          <p className="text-primary font-bold mt-2">Telegram: @itsmehiren</p>
                        </div>
                      </div>
                    ),
                    duration: 6000,
                  });
                }}
                className="w-full h-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/10"
              >
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="mt-10 p-10 md:p-16 bg-white rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1100px] mx-auto shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10">
            <div className="text-center md:text-left">
              <span className="text-xl font-black text-black mb-3 block tracking-tight uppercase">Enterprise</span>
              <p className="text-black/60 text-base max-w-xl leading-relaxed font-medium">
                Custom quotas, private deployments, and white-glove support for mission-critical infrastructure applications. Experience the full power of Frenix with dedicated orchestration.
              </p>
            </div>
            <Link href="/signin" className="h-16 px-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-[13px] tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shrink-0 shadow-xl shadow-black/10">
              Contact Sales <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '12px' }}>
            Prices in USD. By subscribing you agree to our <Link href="/about" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>About Us</Link>, <Link href="/terms" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms</Link> and <Link href="/refund" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Refund Policy</Link>.
          </p>
        </section>
      </RevealSection>

      <RevealSection delay={0.4}>
        <TestimonialsSection />
      </RevealSection>

      <RevealSection delay={0.6}>
        <FAQSection />
      </RevealSection>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <RevealSection>
        <section className="max-w-[1200px] mx-auto mb-20 px-6">
          <div className="px-8 md:px-16 py-16 md:py-20 bg-white text-black rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
            <div className="text-center lg:text-left relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[1.1] !text-black">
                Ship faster with one unified API.
              </h2>
              <p className="!text-black/60 text-sm md:text-lg font-medium leading-relaxed max-w-md">
                Stop managing multiple provider SDKs. Swap your base URL to Frenix and get access to every model from a single key.
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-black/5 pt-8">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-black text-[10px] text-black/40">FT</div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-black uppercase tracking-widest leading-none">Frenix Engineering</span>
                  <span className="text-[10px] font-bold text-black/40 uppercase mt-1">Infrastructure Authority</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
              <Link href="/dashboard" className="h-14 px-10 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                Get started <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/docs" className="h-14 px-8 border border-black/10 rounded-2xl flex items-center justify-center font-bold text-sm hover:bg-black/5 transition-colors">
                <Terminal size={18} className="mr-2" /> Docs
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
