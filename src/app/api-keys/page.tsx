'use client'

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Key, AlertTriangle, Sparkles, Copy, Check } from 'lucide-react';

interface StoredKey {
    plainKey: string;   // only present right after creation
    keyPrefix: string;
    tier: string;
    email: string;
    status?: string;
    createdNow: boolean;
}

function ApiKeysSkeleton() {
    return (
        <div className="dashboard-container">
            <div className="page-header animate-fade">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <Skeleton style={{ height: '32px', width: '180px', marginBottom: '8px' }} />
                        <Skeleton style={{ height: '14px', width: '320px' }} />
                    </div>
                    <Skeleton style={{ height: '40px', width: '150px', borderRadius: '10px' }} />
                </div>
            </div>

            <div className="glass-card" style={{ padding: '32px', marginBottom: '28px' }}>
                <Skeleton style={{ height: '24px', width: '200px', marginBottom: '24px' }} />
                <Skeleton style={{ height: '60px', width: '100%', borderRadius: '10px' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="glass-card p-7 h-40">
                    <Skeleton className="h-5 w-28 mb-4" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                </div>
                <div className="glass-card p-7 h-40">
                    <Skeleton className="h-5 w-28 mb-4" />
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => <Skeleton key={i} className="h-6 w-14 rounded-lg" />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CopyBtn({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(text);
                setCopied(true);
                toast.success('API Key copied to clipboard');
                setTimeout(() => setCopied(false), 2000);
            }}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: copied ? '#059669' : 'var(--text-muted)', fontSize: '13px', padding: '4px 8px', borderRadius: '6px', transition: 'color 0.2s', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
        >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                {copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
            </span>
        </button>
    );
}

export default function ApiKeys() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [status, setStatus] = useState<'loading' | 'authenticated'>('loading');
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/signin');
                return;
            }
            setUser(user);
            setStatus('authenticated');
        };
        checkUser();
    }, []);

    const [key, setKey] = useState<StoredKey | null>(null);
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState('');
    const [hasKey, setHasKey] = useState<boolean | null>(null); // null = loading

    useEffect(() => {
        if (status !== 'authenticated') return;

        const autoCreate = async () => {
            setCreating(true);
            try {
                const createRes = await fetch('/api/gateway/keys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
                const data = await createRes.json();
                if (createRes.ok) {
                    setKey({ plainKey: data.key, keyPrefix: data.key.substring(0, 20), tier: data.tier, email: data.email || user?.email || '', status: data.status || 'active', createdNow: true });
                    setHasKey(true);
                    toast.success('Your API Key has been generated automatically!');
                } else if (createRes.status === 409) {
                    setHasKey(true);
                    setKey({ plainKey: '', keyPrefix: data.keyPrefix || '', tier: data.tier || 'free', email: data.email || user?.email || '', status: data.status || 'active', createdNow: false });
                } else {
                    setError(data.error || 'Failed to create key');
                    setHasKey(false);
                }
            } catch {
                setError('Could not connect to gateway.');
                setHasKey(false);
            } finally {
                setCreating(false);
            }
        };

        const loadOrCreate = async () => {
            try {
                const r = await fetch('/api/gateway/stats');
                if (r.ok) {
                    const data = await r.json();
                    setKey({ plainKey: data.plainKey || '', keyPrefix: data.keyPrefix, tier: data.tier, email: data.email || '', status: data.status || 'active', createdNow: false });
                    setHasKey(true);
                    return;
                }
            } catch { }

            await autoCreate();
        };

        loadOrCreate();
    }, [status]);

    const handleCreate = async () => {
        setCreating(true);
        setError('');
        try {
            const res = await fetch('/api/gateway/keys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
            const data = await res.json();
            if (!res.ok) {
                const msg = data.error || 'Failed to create key';
                setError(msg);
                toast.error(msg);
                return;
            }
            setKey({ plainKey: data.key, keyPrefix: data.key.substring(0, 20), tier: data.tier, email: data.email || user?.email || '', status: data.status || 'active', createdNow: true });
            setHasKey(true);
            toast.success('Your API Key has been generated successfully!');
        } catch {
            const msg = 'Could not connect to gateway. Is the gateway running?';
            setError(msg);
            toast.error(msg);
        } finally {
            setCreating(false);
        }
    };

    if (status === 'loading' || hasKey === null || (creating && !key)) {
        return <ApiKeysSkeleton />;
    }

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="page-header animate-fade">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl">API Key</h1>
                        <p className="text-muted-foreground mt-1 text-sm max-w-lg">
                            Each account is limited to <strong className="text-foreground">one key</strong>. Treat it like a password — it won&apos;t be shown again.
                        </p>
                    </div>
                    {!hasKey && !creating && (
                        <button className="btn-primary py-2.5 px-6 text-sm" onClick={handleCreate} disabled={creating}>
                            Retry
                        </button>
                    )}
                </div>
            </div>

            {error && (
                <div className="alert alert-error" style={{ marginBottom: '24px' }}>
                    <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>{error}</div>
                </div>
            )}

            {/* Key Card */}            {key ? (
                <div className="glass-card animate-fade-2 p-6 md:p-8 mb-7">
                    {key.createdNow && (
                        <div className="alert alert-success mb-6">
                            <Sparkles size={20} className="shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <strong>Key created!</strong> Copy it now — it will <strong>never be shown again</strong>.
                            </div>
                        </div>
                    )}

                    <div className="overflow-x-auto -mx-6 md:mx-0">
                        <div className="inline-block min-w-full align-middle px-6 md:px-0">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                        <th>Token Identifier</th>
                                        <th>Tier</th>
                                        <th>Status</th>
                                        <th>Account</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-semibold">My Gateway Key</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <code className="bg-bg-soft px-3 py-1.5 rounded-lg text-[13px] text-foreground font-mono leading-relaxed border border-border max-w-[280px] sm:max-w-xs md:max-w-md overflow-x-auto block font-bold whitespace-nowrap scrollbar-hide">
                                                    {key.plainKey ? key.plainKey : `${key.keyPrefix}••••••••••••••••••••`}
                                                </code>
                                            </div>
                                        </td>
                                        <td><span className={`badge ${key.tier === 'pro' ? 'badge-warning' : 'badge-success'}`}>{key.tier}</span></td>
                                        <td>
                                            <span className={`badge ${key.status === 'active' ? 'badge-success' : 'badge-error'}`} style={{ textTransform: 'capitalize' }}>
                                                {key.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="text-muted-foreground text-[13px]">{key.email}</td>
                                        <td>
                                            <CopyBtn text={key.plainKey || key.keyPrefix} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="glass-card animate-fade-2 p-12 text-center mb-7">
                    <div className="mb-4 flex justify-center"><Key size={40} className="text-muted-foreground" strokeWidth={1.5} /></div>
                    <h3 className="text-xl font-bold mb-2">
                        {creating ? 'Generating your key…' : 'Something went wrong'}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-7 leading-relaxed">
                        {creating ? 'Hang tight — we\'re setting up your free API key.' : 'Could not create your key automatically. Click retry or check if the gateway is running.'}
                    </p>
                    {!creating && (
                        <button className="btn-primary mx-auto py-3 px-9 text-sm" onClick={handleCreate}>
                            Retry
                        </button>
                    )}
                </div>
            )}

            {/* Integration Docs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                <div className="glass-card animate-fade-3 p-7 border-primary/20 bg-primary/[0.01]">
                    <h3 className="text-base font-bold mb-2">Internal Node Sync</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed mb-5">
                        Your identity and encryption keys are automatically synchronized across all your devices using your authenticated session.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 w-fit">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80">Active & Secured</span>
                    </div>
                </div>

                <div className="glass-card animate-fade-3 p-7">
                    <h3 className="text-base font-bold mb-2">REST API</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed mb-5">
                        Pass your key as a Bearer token to any endpoint.
                    </p>
                    <div className="code-block text-[11px] sm:text-xs overflow-hidden">
                        <div className="truncate"><span className="text-blue-400">POST</span> {process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000'}/v1/chat/completions</div>
                        <div className="text-muted-foreground/60 truncate">Authorization: Bearer sk-frenix-…</div>
                    </div>
                </div>
            </div>

            <div className="glass-card animate-fade-3 p-7 mb-12">
                <h3 className="text-base font-bold mb-2">Compatible With</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed mb-5">
                    Works with any OpenAI-compatible client — just swap the base URL.
                </p>
                <div className="flex flex-wrap gap-2">
                    {['OpenAI SDK', 'LangChain', 'LlamaIndex', 'curl', 'Axios', 'httpx'].map(lib => (
                        <span key={lib} className="px-3 py-1 rounded-lg bg-bg-soft border border-border text-[11px] font-bold">{lib}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
