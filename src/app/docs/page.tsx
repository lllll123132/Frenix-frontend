'use client'

import { useState, useEffect, useRef } from 'react';
import { Copy, Check, ChevronRight, ExternalLink, Zap, Shield, Key, Globe, Image, Mic, Brain, AlertTriangle, Layers } from 'lucide-react';
import { toast } from 'sonner';

const GATEWAY = process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://api.frenix.io';

function CopyBlock({ code, lang = 'bash' }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          toast.success('Copied');
          setTimeout(() => setCopied(false), 2000);
        }}
        style={{
          position: 'absolute', top: '10px', right: '10px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: copied ? '#22c55e' : 'var(--text-muted)', padding: '4px',
          display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px',
        }}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
      <pre style={{
        background: '#18181b', color: '#a1a1aa', padding: '18px 20px',
        borderRadius: '10px', fontSize: '13px', lineHeight: '1.7',
        overflowX: 'auto', border: '1px solid #27272a',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      }}>
        {code}
      </pre>
    </div>
  );
}

function Badge({ children, color = 'green' }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    green: { bg: 'rgba(34,197,94,0.1)', text: '#22c55e' },
    blue: { bg: 'rgba(59,130,246,0.1)', text: '#3b82f6' },
    yellow: { bg: 'rgba(245,158,11,0.1)', text: '#f59e0b' },
    red: { bg: 'rgba(239,68,68,0.1)', text: '#ef4444' },
  };
  const c = colors[color] || colors.green;
  return (
    <span style={{
      fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '6px',
      background: c.bg, color: c.text,
    }}>{children}</span>
  );
}

function Method({ method }: { method: string }) {
  const color = method === 'GET' ? '#22c55e' : method === 'POST' ? '#3b82f6' : '#f59e0b';
  return (
    <span style={{
      fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px',
      background: `${color}15`, color,
      fontFamily: 'ui-monospace, monospace', letterSpacing: '0.04em',
    }}>{method}</span>
  );
}

const sections = [
  { id: 'overview', label: 'Overview', icon: Globe },
  { id: 'auth', label: 'Authentication', icon: Key },
  { id: 'chat', label: 'Chat Completions', icon: Zap },
  { id: 'images', label: 'Images', icon: Image },
  { id: 'audio', label: 'Audio', icon: Mic },
  { id: 'embeddings', label: 'Embeddings', icon: Brain },
  { id: 'moderations', label: 'Moderations', icon: Shield },
  { id: 'models', label: 'Models', icon: Layers },
  { id: 'tiers', label: 'Tiers & Limits', icon: AlertTriangle },
  { id: 'errors', label: 'Errors', icon: AlertTriangle },
];

export default function DocsPage() {
  const [active, setActive] = useState('overview');
  const manualClick = useRef(false);

  useEffect(() => {
    const ids = sections.map(s => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualClick.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    manualClick.current = true;
    setTimeout(() => { manualClick.current = false; }, 800);
  };

  return (
    <div className="dashboard-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Fixed sidebar */}
      <nav style={{
        position: 'fixed', top: '120px', width: '180px',
        zIndex: 50, paddingTop: '8px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
          API Reference
        </div>
        {sections.map(s => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => handleNavClick(s.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '7px 12px', borderRadius: '8px', marginBottom: '2px',
                fontSize: '13px', fontWeight: isActive ? '600' : '500',
                color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                background: isActive ? 'var(--bg-soft)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.15s',
              }}
            >
              <Icon size={14} strokeWidth={2} style={{ opacity: isActive ? 0.9 : 0.5 }} />
              {s.label}
            </a>
          );
        })}
      </nav>

      {/* Content */}
      <main style={{ marginLeft: '210px', minWidth: 0, paddingBottom: '80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--text-main)', marginBottom: '8px' }}>
            API Documentation
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
            The Frenix API is OpenAI-compatible. Point any existing client at our base URL and authenticate with your API key.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Base URL</span>
            <code style={{
              background: 'var(--bg-soft)', border: '1px solid var(--border)', padding: '4px 12px',
              borderRadius: '6px', fontSize: '13px', fontFamily: 'ui-monospace, monospace',
              color: 'var(--text-main)', fontWeight: '500',
            }}>{GATEWAY}/v1</code>
          </div>
        </div>

        {/* ── Overview ─────────────────────────────────── */}
        <section id="overview" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Overview</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
            Frenix is a unified AI gateway that routes requests across multiple providers — OpenAI, Anthropic, Google, and more — through a single endpoint. It handles failover, model mapping, usage tracking, and cost calculation automatically.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
            The API follows the OpenAI specification. Any SDK or HTTP client that works with OpenAI will work with Frenix — just change the base URL and use your Frenix API key.
          </p>

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', color: 'var(--text-main)' }}>Quick start</h3>
          <CopyBlock lang="bash" code={`curl ${GATEWAY}/v1/chat/completions \\
  -H "Authorization: Bearer sk-frenix-YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`} />

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', marginTop: '28px', color: 'var(--text-main)' }}>Python (OpenAI SDK)</h3>
          <CopyBlock lang="python" code={`from openai import OpenAI

client = OpenAI(
    base_url="${GATEWAY}/v1",
    api_key="sk-frenix-YOUR_KEY"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello"}]
)
print(response.choices[0].message.content)`} />

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', marginTop: '28px', color: 'var(--text-main)' }}>JavaScript (fetch)</h3>
          <CopyBlock lang="javascript" code={`const res = await fetch("${GATEWAY}/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer sk-frenix-YOUR_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Hello" }]
  })
});

const data = await res.json();
console.log(data.choices[0].message.content);`} />
        </section>

        {/* ── Authentication ──────────────────────────── */}
        <section id="auth" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Authentication</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
            All API requests require an API key. Pass it via the <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>Authorization</code> header or the <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>x-api-key</code> header.
          </p>

          <CopyBlock code={`# Option 1: Bearer token
Authorization: Bearer sk-frenix-YOUR_KEY

# Option 2: x-api-key header
x-api-key: sk-frenix-YOUR_KEY`} />

          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
            Keys are generated on the <a href="/api-keys" style={{ color: 'var(--text-main)', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '2px' }}>API Keys</a> page. Each account gets one key. Keys follow the format <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>sk-frenix-*</code> and are hashed server-side — they cannot be recovered after creation.
          </p>

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', color: 'var(--text-main)' }}>Create a key (programmatic)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/keys</code> <Badge color="green">No auth required</Badge>
          </div>
          <CopyBlock code={`curl -X POST ${GATEWAY}/v1/keys \\
  -H "Content-Type: application/json" \\
  -d '{"email": "you@example.com"}'

# Response
{
  "key": "sk-frenix-a1b2c3d4...",
  "tier": "free",
  "email": "you@example.com"
}`} />
        </section>

        {/* ── Chat Completions ────────────────────────── */}
        <section id="chat" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Chat Completions</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/chat/completions</code>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
            Fully compatible with the OpenAI Chat Completions API. Supports streaming via <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>stream: true</code>. The gateway routes to the optimal provider based on your tier and model.
          </p>

          <CopyBlock code={`curl ${GATEWAY}/v1/chat/completions \\
  -H "Authorization: Bearer sk-frenix-YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing in one sentence."}
    ],
    "temperature": 0.7,
    "max_tokens": 256,
    "stream": false
  }'`} />

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', marginTop: '24px', color: 'var(--text-main)' }}>Streaming</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>
            Set <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>stream: true</code> to receive server-sent events. The response format matches OpenAI&apos;s SSE spec exactly.
          </p>

          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', marginTop: '24px', color: 'var(--text-main)' }}>Anthropic format</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>
            To use the Anthropic Messages format, send to <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>/v1/messages</code> or set the header <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>x-gateway-format: anthropic</code> on the <code style={{ background: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>/v1/responses</code> endpoint.
          </p>
        </section>

        {/* ── Images ──────────────────────────────────── */}
        <section id="images" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Images</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { path: '/v1/images/generations', desc: 'Generate images from a text prompt.', body: `{
  "model": "dall-e-3",
  "prompt": "A sunset over mountains",
  "size": "1024x1024",
  "n": 1
}` },
              { path: '/v1/images/edits', desc: 'Edit an image using a prompt and mask. Multipart form data.' },
              { path: '/v1/images/variations', desc: 'Generate variations of an existing image. Multipart form data.' },
            ].map((ep, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>{ep.path}</code>
                  {ep.path.includes('edit') || ep.path.includes('variation') ? <Badge color="yellow">Multipart</Badge> : null}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: ep.body ? '12px' : '0' }}>{ep.desc}</p>
                {ep.body && <CopyBlock code={ep.body} />}
              </div>
            ))}
          </div>
        </section>

        {/* ── Audio ───────────────────────────────────── */}
        <section id="audio" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Audio</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/audio/speech</code> <Badge color="blue">Pro</Badge>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>Convert text to speech. Returns audio binary.</p>
              <CopyBlock code={`{
  "model": "tts-1",
  "input": "Hello, welcome to Frenix.",
  "voice": "alloy"
}`} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/audio/transcriptions</code> <Badge color="yellow">Multipart</Badge>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>Transcribe audio to text. Upload audio file as multipart form data.</p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/audio/translations</code> <Badge color="yellow">Multipart</Badge>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>Translate audio to English text.</p>
            </div>
          </div>
        </section>

        {/* ── Embeddings ─────────────────────────────── */}
        <section id="embeddings" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Embeddings</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/embeddings</code>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>
            Generate vector embeddings for text input.
          </p>
          <CopyBlock code={`{
  "model": "text-embedding-3-small",
  "input": "The food was delicious and the waiter..."
}`} />
        </section>

        {/* ── Moderations ────────────────────────────── */}
        <section id="moderations" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Moderations</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Method method="POST" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/moderations</code>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>
            Check text for policy violations. Returns category scores and flags.
          </p>
          <CopyBlock code={`{
  "input": "Some text to check for policy compliance."
}`} />
        </section>

        {/* ── Models ─────────────────────────────────── */}
        <section id="models" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Models</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Method method="GET" /> <code style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace' }}>/v1/models</code>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
            Returns the list of all available models for your tier. The response follows the OpenAI models list format.
          </p>
          <CopyBlock code={`curl ${GATEWAY}/v1/models \\
  -H "Authorization: Bearer sk-frenix-YOUR_KEY"`} />
        </section>

        {/* ── Tiers & Limits ─────────────────────────── */}
        <section id="tiers" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Tiers & Rate Limits</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
            Your tier determines which models you can access and your rate limits.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px',
            background: 'var(--border)', borderRadius: '10px', overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            {/* Header */}
            <div style={{ background: 'var(--bg-soft)', padding: '12px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Feature</div>
            <div style={{ background: 'var(--bg-soft)', padding: '12px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Free</div>
            <div style={{ background: 'var(--bg-soft)', padding: '12px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pro</div>
            {[
              ['Rate limit', '10 req/min', 'Unlimited'],
              ['Models', 'Community models', 'All models'],
              ['Pro models', 'No', 'Yes'],
              ['Providers', 'Secondary', 'Primary + Secondary'],
              ['Streaming', 'Yes', 'Yes'],
              ['Cost tracking', 'Yes', 'Yes'],
            ].map(([feature, free, pro], i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ background: 'var(--bg-card)', padding: '10px 16px', fontSize: '13px', fontWeight: '600', color: 'var(--text-main)' }}>{feature}</div>
                <div style={{ background: 'var(--bg-card)', padding: '10px 16px', fontSize: '13px', color: 'var(--text-muted)' }}>{free}</div>
                <div style={{ background: 'var(--bg-card)', padding: '10px 16px', fontSize: '13px', color: 'var(--text-muted)' }}>{pro}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Errors ──────────────────────────────────── */}
        <section id="errors" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Errors</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
            The API returns standard HTTP status codes with JSON error bodies.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1px',
            background: 'var(--border)', borderRadius: '10px', overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <div style={{ background: 'var(--bg-soft)', padding: '10px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Code</div>
            <div style={{ background: 'var(--bg-soft)', padding: '10px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Description</div>
            {[
              ['400', 'Bad Request — invalid or missing parameters'],
              ['401', 'Unauthorized — missing or invalid API key'],
              ['403', 'Forbidden — your tier cannot access this model'],
              ['404', 'Not Found — no key exists for this account'],
              ['429', 'Rate Limited — exceeded 10 requests/min (free tier)'],
              ['500', 'Internal Server Error — something went wrong on our end'],
              ['502', 'Bad Gateway — upstream provider returned an error'],
            ].map(([code, desc], i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ background: 'var(--bg-card)', padding: '10px 16px', fontSize: '13px', fontWeight: '600', fontFamily: 'ui-monospace, monospace', color: parseInt(code) >= 500 ? '#ef4444' : parseInt(code) >= 400 ? '#f59e0b' : 'var(--text-main)' }}>{code}</div>
                <div style={{ background: 'var(--bg-card)', padding: '10px 16px', fontSize: '13px', color: 'var(--text-muted)' }}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', color: 'var(--text-main)' }}>Error response format</h3>
            <CopyBlock code={`{
  "error": "Rate limit exceeded. Free tier: 10 requests per minute."
}`} />
          </div>
        </section>

        {/* ── All Endpoints ──────────────────────────── */}
        <section id="all-endpoints" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-main)' }}>All Endpoints</h2>

          <div style={{
            display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: '1px',
            background: 'var(--border)', borderRadius: '10px', overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <div style={{ background: 'var(--bg-soft)', padding: '10px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}></div>
            <div style={{ background: 'var(--bg-soft)', padding: '10px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Path</div>
            <div style={{ background: 'var(--bg-soft)', padding: '10px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Auth</div>
            {[
              ['POST', '/v1/keys', 'No'],
              ['GET', '/v1/keys/stats', 'Yes'],
              ['POST', '/v1/chat/completions', 'Yes'],
              ['POST', '/v1/messages', 'Yes'],
              ['POST', '/v1/responses', 'Yes'],
              ['POST', '/v1/images/generations', 'Yes'],
              ['POST', '/v1/images/edits', 'Yes'],
              ['POST', '/v1/images/variations', 'Yes'],
              ['POST', '/v1/audio/speech', 'Yes'],
              ['POST', '/v1/audio/transcriptions', 'Yes'],
              ['POST', '/v1/audio/translations', 'Yes'],
              ['POST', '/v1/embeddings', 'Yes'],
              ['POST', '/v1/moderations', 'Yes'],
              ['GET', '/v1/models', 'Yes'],
              ['GET', '/v1/status', 'No'],
            ].map(([method, path, auth], i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ background: 'var(--bg-card)', padding: '8px 16px', display: 'flex', alignItems: 'center' }}><Method method={method} /></div>
                <div style={{ background: 'var(--bg-card)', padding: '8px 16px', fontSize: '13px', fontFamily: 'ui-monospace, monospace', color: 'var(--text-main)' }}>{path}</div>
                <div style={{ background: 'var(--bg-card)', padding: '8px 16px', fontSize: '12px', color: auth === 'Yes' ? 'var(--text-muted)' : '#22c55e', fontWeight: '500' }}>{auth === 'Yes' ? 'Required' : 'Public'}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
