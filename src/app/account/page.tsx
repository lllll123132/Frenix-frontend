'use client'

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import { User, Mail, AtSign, BadgeCheck, ShieldCheck, Camera } from 'lucide-react';

export default function AccountPage() {
    const supabase = createClient();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    // Form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/signin');
                return;
            }
            setUser(user);

            // Hydrate fields from user_metadata
            const meta = user.user_metadata || {};
            setFirstName(meta.first_name || meta.full_name?.split(' ')[0] || '');
            setLastName(meta.last_name || meta.full_name?.split(' ').slice(1).join(' ') || '');
            setUsername(meta.user_name || user.email?.split('@')[0] || '');
            setAvatarUrl(meta.avatar_url || '');

            setLoading(false);
        };
        checkUser();
    }, [router]);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setUpdating(true);

        const { error } = await supabase.auth.updateUser({
            data: {
                full_name: `${firstName} ${lastName}`.trim(),
                first_name: firstName,
                last_name: lastName,
                user_name: username,
                avatar_url: avatarUrl
            }
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Profile updated successfully');
            // Refresh local state
            const { data: { user: updated } } = await supabase.auth.getUser();
            setUser(updated);
        }
        setUpdating(false);
    };

    if (loading) return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <div className="loader"></div>
        </div>
    );

    return (
        <div className="dashboard-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px' }}>
            <div className="page-header animate-fade" style={{ textAlign: 'center', border: 'none', marginBottom: '48px' }}>
                <div style={{
                    display: 'inline-flex',
                    padding: '8px 20px',
                    background: 'rgba(45, 212, 191, 0.1)',
                    borderRadius: '30px',
                    color: 'var(--primary)',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '16px'
                }}>
                    User Preferences
                </div>
                <h1 style={{ fontSize: '42px', fontWeight: '800', letterSpacing: '-1.5px', marginBottom: '12px', color: 'var(--text-main)' }}>Account Portal</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
                    Manage your gateway identity, profile picture, and account metadata.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }} className="animate-fade-2">
                {/* Left: Preview Card */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="glass-card" style={{ padding: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0,
                            height: '80px',
                            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                            opacity: 0.1,
                            zIndex: 0
                        }} />

                        <div style={{ position: 'relative', zIndex: 1, marginBottom: '20px' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '32px',
                                margin: '0 auto',
                                overflow: 'hidden',
                                border: '4px solid var(--bg-card)',
                                boxShadow: 'var(--shadow-lg)',
                                background: 'var(--bg-soft)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt="PFP" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <User size={48} color="var(--text-muted)" />
                                )}
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '4px' }}>
                                {firstName} {lastName}
                            </h2>
                            <p style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600', marginBottom: '16px' }}>
                                @{username}
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                background: 'var(--bg-soft)',
                                padding: '10px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                border: '1px solid var(--border)'
                            }}>
                                <Mail size={14} color="var(--text-muted)" />
                                <span style={{ color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Status</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                                <BadgeCheck size={16} color="#10b981" />
                                <span style={{ color: 'var(--text-muted)' }}>Email Verified</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                                <ShieldCheck size={16} color="var(--primary)" />
                                <span style={{ color: 'var(--text-muted)' }}>Free Tier Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Detailed Edit Form */}
                <div className="glass-card" style={{ padding: '40px' }}>
                    <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="account-input"
                                    placeholder="Jane"
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="account-input"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Username</label>
                            <div style={{ position: 'relative' }}>
                                <AtSign size={14} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="account-input"
                                    style={{ paddingLeft: '40px' }}
                                    placeholder="janedoe"
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Profile Picture URL</label>
                            <div style={{ position: 'relative' }}>
                                <Camera size={14} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="url"
                                    value={avatarUrl}
                                    onChange={(e) => setAvatarUrl(e.target.value)}
                                    className="account-input"
                                    style={{ paddingLeft: '40px' }}
                                    placeholder="https://example.com/pfp.jpg"
                                />
                            </div>
                            <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic' }}>Paste any image link to update your avatar.</p>
                        </div>

                        <div style={{ paddingTop: '12px' }}>
                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={updating}
                                style={{ width: '100%', justifyContent: 'center', height: '52px' }}
                            >
                                {updating ? (
                                    <>
                                        <div className="loader" style={{ width: '18px', height: '18px', borderWidth: '2px', borderBottomColor: '#fff' }}></div>
                                        <span>Saving Profile...</span>
                                    </>
                                ) : (
                                    <>Save Profile Changes</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="animate-fade-3" style={{ textAlign: 'center', marginTop: '48px' }}>
                <Link href="/dashboard" style={{
                    color: 'var(--text-muted)',
                    fontWeight: '600',
                    fontSize: '13px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                }} className="hover-text-primary">
                    <span>←</span> Return to Gateway Dashboard
                </Link>
            </div>

        </div>
    );
}
