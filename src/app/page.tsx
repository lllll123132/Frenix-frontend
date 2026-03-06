'use client'

import Link from 'next/link';
import { toast } from 'sonner';
import CountUp from '@/components/ui/CountUp';
import { OpenAI, Anthropic, Google } from '@lobehub/icons';
import { ArrowRight, Copy, TrendingUp, Zap, Shield, Globe, Check, Terminal, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const featuredModels = [
  {
    name: 'Gemini 3 Pro',
    provider: 'Google DeepMind',
    Icon: Google,
    tokensWk: '70.9B',
    latency: '10.8s',
    change: '+165.62%',
    positive: true,
    isNew: true,
  },
  {
    name: 'Claude 4.5 Sonnet',
    provider: 'Anthropic',
    Icon: Anthropic,
    tokensWk: '18.9B',
    latency: '633ms',
    change: '-4.13%',
    positive: false,
    isNew: true,
  },
  {
    name: 'GPT 5.1',
    provider: 'OpenAI',
    Icon: OpenAI,
    tokensWk: '324.8B',
    latency: '1.4s',
    change: '+4.33%',
    positive: true,
    isNew: false,
  },
];

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
        paddingTop: '32px',
        paddingBottom: '100px',
      }}>
        <div className="hero-grid-bg" />

        <div className="hero-split" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div style={{ zIndex: 2 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '5px 14px', borderRadius: '8px',
              background: 'var(--bg-soft)',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              border: '1px solid var(--border)',
              fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              Operational
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)',
              color: 'var(--text-main)',
              letterSpacing: '-0.035em',
              lineHeight: '1.05',
              fontWeight: '800',
              margin: '0 0 28px 0',
            }}>
              The unified gateway{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: '700' }}>for machine intelligence.</span>
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '1.65',
              fontWeight: '400',
              maxWidth: '440px',
              marginBottom: '36px',
            }}>
              Access 150+ LLMs through a single endpoint. Route across OpenAI, Anthropic, Google, and more — no client changes needed.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/dashboard" className="btn-primary" style={{
                padding: '12px 28px',
                gap: '8px',
                fontSize: '14px',
              }}>
                Get started
                <ArrowRight size={15} strokeWidth={2} />
              </Link>

              <button
                className="btn-copy-endpoint"
                onClick={() => {
                  navigator.clipboard.writeText('api.frenix.io/v1');
                  toast.success('Endpoint copied');
                }}
              >
                <span>api.frenix.io/v1</span>
                <Copy size={13} strokeWidth={2} style={{ opacity: 0.4 }} />
              </button>
            </div>
          </div>

          {/* Right: Featured Models */}
          <div style={{ zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
              <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>Featured Models</span>
              <Link href="/dashboard" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                View Trending <TrendingUp size={12} />
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Bracket */}
              <div style={{ width: '14px', flexShrink: 0, position: 'relative' }}>
                <svg width="14" height="100%" viewBox="0 0 14 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <path d="M12 0 Q2 0, 2 12 L2 38 Q2 50, 0 50 Q2 50, 2 62 L2 88 Q2 100, 12 100" stroke="var(--border)" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {featuredModels.map((m, i) => (
                  <div
                    key={i}
                    className="model-card"
                    style={{
                      padding: '18px 20px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '14px',
                      transition: 'border-color 0.15s, transform 0.15s',
                      cursor: 'default',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <div style={{
                        width: '34px', height: '34px', borderRadius: '10px',
                        background: 'var(--bg-soft)', border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <m.Icon size={17} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                          <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-main)', fontStyle: 'italic', letterSpacing: '-0.01em' }}>{m.name}</span>
                          {m.isNew && (
                            <span style={{
                              fontSize: '10px', fontWeight: '600', padding: '2px 8px', borderRadius: '6px',
                              background: 'var(--muted)', color: 'var(--text-muted)',
                            }}>New</span>
                          )}
                        </div>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{m.provider}</span>
                      </div>
                      <span style={{
                        fontSize: '12px', fontWeight: '700', fontVariantNumeric: 'tabular-nums',
                        color: m.positive ? '#22c55e' : '#ef4444',
                      }}>{m.change}</span>
                    </div>

                    <div style={{
                      display: 'flex', alignItems: 'center',
                      fontSize: '12px', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums',
                      gap: '24px', paddingTop: '10px', borderTop: '1px solid var(--border)',
                    }}>
                      <span><strong style={{ color: 'var(--text-main)', fontWeight: '600' }}>{m.tokensWk}</strong> Tokens/wk</span>
                      <span><strong style={{ color: 'var(--text-main)', fontWeight: '600' }}>{m.latency}</strong> Latency</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Features ──────────────────────────────────────────── */}
      <RevealSection>
        <section style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '10px', color: 'var(--text-main)' }}>
              Built for developers
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '420px', lineHeight: '1.6' }}>
              Everything you need to integrate AI, without the infrastructure overhead.
            </p>
          </div>

          <div className="feature-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <div className="bento-tall" style={{
              padding: '40px',
              background: 'var(--bg-card)',
              gridRow: 'span 2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'var(--bg-soft)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                }}>
                  <Zap size={18} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Dynamic routing
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', maxWidth: '340px' }}>
                  Route traffic across OpenAI, Anthropic, Gemini, and local LLMs from a single endpoint. Automatic failover and latency-aware selection.
                </p>
              </div>

              <div className="code-block" style={{ marginTop: '28px', fontSize: '12px' }}>
                <div><span style={{ color: '#7dd3fc' }}>curl</span> -X POST api.frenix.io/v1/chat/completions \</div>
                <div>&nbsp; -H <span style={{ color: '#86efac' }}>&quot;Authorization: Bearer sk-frenix-...&quot;</span> \</div>
                <div>&nbsp; -d <span style={{ color: '#86efac' }}>&apos;{`{"model":"gpt-4o","messages":[...]}`}&apos;</span></div>
              </div>
            </div>

            <div style={{ padding: '36px', background: 'var(--bg-card)', transition: 'background 0.15s' }} className="feature-cell">
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'var(--bg-soft)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <Shield size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                GitHub OAuth
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                Authenticate with GitHub in seconds. Secure token management, zero configuration.
              </p>
            </div>

            <div style={{ padding: '36px', background: 'var(--bg-card)', transition: 'background 0.15s' }} className="feature-cell">
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'var(--bg-soft)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <Globe size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                Universal API
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                One token, every model. Drop-in replacement for direct provider calls — swap your base URL and ship.
              </p>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <RevealSection delay={80}>
        <div style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}>
            {[
              { num: 99.7, suffix: "%", label: "Uptime SLA" },
              { num: 38, prefix: "<", suffix: "ms", label: "Avg latency" },
              { num: 150, suffix: "+", label: "Models supported" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '36px 32px',
                textAlign: 'center',
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontSize: '36px', fontWeight: '700', letterSpacing: '-0.03em',
                  color: 'var(--text-main)',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {s.prefix}<CountUp to={s.num} duration={2} separator="." />{s.suffix}
                </div>
                <div style={{ color: 'var(--text-muted)', marginTop: '6px', fontSize: '13px', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <RevealSection>
        <section id="pricing" style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '10px', color: 'var(--text-main)' }}>
              Pricing
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '360px', lineHeight: '1.6' }}>
              Start free. Scale when you need to.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '16px' }}>
            {/* Free */}
            <div className="pricing-card" style={{
              padding: '40px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '16px' }}>Free</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '10px' }}>
                <span style={{ fontSize: '40px', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
                  $<CountUp to={0} duration={1} />
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>/mo</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '14px', lineHeight: '1.6' }}>For side projects and prototyping.</p>

              <div style={{ flex: 1, marginBottom: '32px' }}>
                {["1,000 requests/day", "All community models", "Standard latency", "Community support"].map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '13px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <Check size={14} strokeWidth={2.5} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/signin" className="btn-ghost" style={{
                justifyContent: 'center', width: '100%', padding: '12px', fontSize: '14px',
              }}>
                Get started
              </Link>
            </div>

            {/* Pro — highlighted */}
            <div className="pricing-card pricing-card-pro" style={{
              padding: '40px',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.15)', color: 'inherit' }}>
                Recommended
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', opacity: 0.7, marginBottom: '16px' }}>Pro</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '10px' }}>
                <span style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em' }}>
                  $<CountUp to={10} duration={2} />
                </span>
                <span style={{ opacity: 0.6, fontSize: '14px' }}>/mo</span>
              </div>
              <p style={{ opacity: 0.7, marginBottom: '32px', fontSize: '14px', lineHeight: '1.6' }}>For production workloads and growing teams.</p>

              <div style={{ flex: 1, marginBottom: '32px' }}>
                {["Unlimited requests", "20 requests per minute", "Priority model access", "Global edge network", "Email support"].map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '13px', fontSize: '13px' }}>
                    <Check size={14} strokeWidth={2.5} style={{ opacity: 0.6, flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/signin" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                width: '100%', padding: '12px', fontSize: '14px', fontWeight: '600',
                background: 'var(--primary-foreground)', color: 'var(--primary)',
                borderRadius: '10px', textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                Start free trial
              </Link>
            </div>
          </div>

          {/* Enterprise bar */}
          <div className="enterprise-bar" style={{
            marginTop: '16px', padding: '28px 40px',
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-main)' }}>Enterprise</span>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
                SLA guarantees, custom model deployment, dedicated infrastructure, 24/7 support.
              </p>
            </div>
            <Link href="/signin" className="btn-ghost" style={{ padding: '10px 24px', fontSize: '13px', flexShrink: 0 }}>
              Contact sales <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>

          <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '12px' }}>
            Prices in USD. By subscribing you agree to our <Link href="/terms" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms</Link> and <Link href="/refund" style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Refund Policy</Link>.
          </p>
        </section>
      </RevealSection>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <RevealSection>
        <section style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 24px' }}>
          <div style={{
            padding: '64px 48px',
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
            <div style={{ position: 'absolute', bottom: '-40px', right: '120px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

            <div style={{ zIndex: 1, maxWidth: '520px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: '1.2' }}>
                Ship faster with one API
              </h2>
              <p style={{ opacity: 0.7, fontSize: '15px', lineHeight: '1.6' }}>
                Stop managing multiple provider SDKs. Swap your base URL to Frenix and get access to every model from a single key.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexShrink: 0, zIndex: 1 }}>
              <Link href="/dashboard" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', fontSize: '14px', fontWeight: '600',
                background: 'var(--primary-foreground)', color: 'var(--primary)',
                borderRadius: '10px', textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                Get started <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link href="/docs" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', fontSize: '14px', fontWeight: '600',
                background: 'transparent', color: 'inherit',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '10px', textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                <Terminal size={14} strokeWidth={2} /> Read docs
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
