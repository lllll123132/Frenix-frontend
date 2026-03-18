import Link from 'next/link';
import Image from 'next/image';

export default function OwnerPage() {
    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background-color 0.3s' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto', padding: '80px 24px' }}>
                <Link href="/" style={{ color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontWeight: '600' }}>
                    ← Back to Home
                </Link>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{ 
                        width: '200px', 
                        height: '200px', 
                        borderRadius: '50%', 
                        overflow: 'hidden', 
                        border: '4px solid var(--primary)',
                        marginBottom: '24px',
                        position: 'relative',
                        boxShadow: '0 0 30px var(--primary-muted)'
                    }}>
                        <Image 
                            src="/owner-avatar.png" 
                            alt="Hiren Ahlawat" 
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-2px', color: 'var(--text-main)' }}>Hiren Ahlawat</h1>
                    <p style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Founder & Lead Architect</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', color: 'var(--text-main)', lineHeight: '1.8' }}>
                    
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary)', letterSpacing: '-0.5px' }}>Meet the Founder</h2>
                        <p>Hiren Ahlawat is the visionary mind behind Frenix. With a deep passion for decentralized intelligence and low-latency systems, Hiren built the foundation of the Frenix AI Gateway to solve the fragmentation in the modern LLM landscape.</p>
                        <p style={{ marginTop: '16px' }}>His philosophy is simple: <strong>Innovation shouldn't be gated by complexity.</strong> By building a unified architecture, he empowers developers to switch between the world's most powerful models with a single line of code.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary)', letterSpacing: '-0.5px' }}>The Legacy</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <div style={{ padding: '24px', borderRadius: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Visionary Leadership</h3>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>Leading the charge in creating an open, high-performance future for AI orchestration.</p>
                            </div>
                            <div style={{ padding: '24px', borderRadius: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Architectural Excellence</h3>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>Designing systems optimized for sub-50ms latency and enterprise-grade security.</p>
                            </div>
                            <div style={{ padding: '24px', borderRadius: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>Community Driven</h3>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>Building for developers, by developers, with a focus on freedom and transparency.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ padding: '40px', borderRadius: '32px', background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg) 100%)', border: '1px solid var(--primary-muted)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>"The goal isn't just to route tokens. It's to build the infrastructure of intelligence."</h2>
                        <p style={{ color: 'var(--primary)', fontWeight: '700' }}>— Hiren Ahlawat</p>
                    </section>

                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '60px', borderTop: '1px solid var(--border)', paddingTop: '32px', textAlign: 'center' }}>
                        © 2026 Frenix Infrastructure Group. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
