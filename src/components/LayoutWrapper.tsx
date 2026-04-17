'use client'

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Header } from '@/components/ui/header-2';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const isLanding = pathname === '/';
    const isAuth = pathname.startsWith('/api/auth') || pathname === '/signin' || pathname === '/oauth/consent';
    const isRestrictedPath = pathname.startsWith('/admin') || pathname.startsWith('/team');

    const [user, setUser] = useState<any>(null);
    const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setStatus(user ? 'authenticated' : 'unauthenticated');
        };

        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setStatus(session?.user ? 'authenticated' : 'unauthenticated');
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
        router.push('/');
    };

    if (isAuth || isRestrictedPath) return <>{children}</>;

    const navLinks = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Models', href: '/models' },
        { label: 'Status', href: 'https://status.frenix.sh' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Blog', href: '/blog' },
    ];

    const isFullWidth = pathname === '/models' || pathname === '/playground' || pathname === '/oauth/consent';

    return (
        <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
            <Header
                links={navLinks}
                user={status === 'authenticated' ? user : null}
                onSignOut={handleSignOut}
            />

            <div style={{ height: '56px' }} aria-hidden="true" />

            <main style={{
                flex: 1,
                position: 'relative',
                width: '100%',
                maxWidth: isFullWidth ? 'none' : '1200px',
                margin: '0 auto',
                padding: isLanding || isFullWidth ? '0' : '0 24px'
            }}>
                {children}
            </main>

            {isLanding && (
                <footer className="px-6 py-12 md:px-12 lg:px-20 border-t border-border flex flex-col md:flex-row justify-between items-start gap-12 text-[13px] text-muted-foreground bg-bg relative z-10">
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-3 text-foreground font-bold text-lg tracking-tight">
                            <img src="/logo-withoutbg.png" alt="Frenix" className="w-7 h-7" />
                            <span>Frenix</span>
                        </div>
                        <p className="line-height-relaxed">The unified AI gateway for developers. Route, monitor, and scale your applications from a single endpoint.</p>
                        <div className="flex gap-3 mt-2">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-bg-soft border border-border flex items-center justify-center transition-colors hover:border-ring">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-0.5 opacity-60">
                            <span className="text-xs">2026 Frenix Inc. All rights reserved.</span>
                            <span className="text-[11px] italic">Built by <strong className="font-bold opacity-100">Hiren Ahlawat</strong></span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
                        <div className="flex flex-col gap-3.5">
                            <span className="font-extrabold text-foreground mb-1 text-[11px] uppercase tracking-widest">Product</span>
                            <Link href="/blog" className="hover-text-primary">Blog</Link>
                            <Link href="/#pricing" className="hover-text-primary">Pricing</Link>
                            <Link href="/dashboard" className="hover-text-primary">Dashboard</Link>
                            <Link href="/api-keys" className="hover-text-primary">API Keys</Link>
                            <Link href="/docs" className="hover-text-primary">Documentation</Link>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <span className="font-extrabold text-foreground mb-1 text-[11px] uppercase tracking-widest">Support</span>
                            <Link href="/about" className="hover-text-primary">About Us</Link>
                            <Link href="/careers" className="hover-text-primary">Careers</Link>
                            <Link href="/community" className="hover-text-primary">Community</Link>
                            <Link href="/terms" className="hover-text-primary">Terms of service</Link>
                            <Link href="/privacy" className="hover-text-primary">Privacy policy</Link>
                            <Link href="/refund" className="hover-text-primary">Refund policy</Link>
                            <a href="https://status.frenix.sh" target="_blank" rel="noopener noreferrer" className="hover-text-primary">Status</a>
                            <a href="mailto:support@frenix.sh" className="hover-text-primary">Contact support</a>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
