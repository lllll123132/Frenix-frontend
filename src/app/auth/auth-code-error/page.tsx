'use client'

import Link from 'next/link';

export default function AuthCodeError() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            transition: 'background-color 0.3s ease'
        }}>
            {/* Ambient blobs */}
            <div aria-hidden style={{ position: 'fixed', top: '-30%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08), transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '420px' }}>
                {/* Card */}
                <div className="glass-card" style={{
                    padding: '48px 44px',
                    textAlign: 'center',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                }}>
                    {/* Icon */}
                    <div style={{ marginBottom: '32px' }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'rgba(239, 68, 68, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <h1 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Authentication Error</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '12px', lineHeight: '1.6' }}>
                            The authentication code is invalid or has expired. This can happen if you wait too long to sign in or if the link has already been used.
                        </p>
                    </div>

                    {/* Action */}
                    <Link
                        href="/signin"
                        style={{
                            width: '100%',
                            padding: '13px 20px',
                            borderRadius: '12px',
                            background: 'var(--text-main)',
                            color: 'var(--bg)',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            marginBottom: '20px',
                            boxShadow: 'var(--shadow)',
                        }}
                    >
                        Try Signing In Again
                    </Link>

                    {/* Back */}
                    <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}>
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
