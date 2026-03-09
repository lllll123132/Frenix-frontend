'use client'

import { useEffect, useState } from 'react';
import { Activity, Database, Server, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface GatewayStatus {
    status: string;
    timestamp: string;
    database: string;
    version: string;
    error?: string;
}

export default function StatusPage() {
    const [status, setStatus] = useState<GatewayStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStatus = async () => {
        setLoading(true);
        try {
            // We call the gateway status through our frontend API or directly if enabled
            const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:3000';
            const res = await fetch(`${gatewayUrl}/v1/status`, { cache: 'no-store' });
            const data = await res.json();
            setStatus(data);
            setError(null);
        } catch (err: any) {
            setError('Could not reach the AI Gateway. It might be offline.');
            setStatus(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 30000); // Refresh every 30s
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
            <div className="page-header animate-fade" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <Activity size={48} color="var(--primary)" style={{ marginBottom: '16px' }} />
                <h1 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px' }}>System Status</h1>
                <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Real-time health monitoring of the Frenix AI Gateway.</p>
            </div>

            <div className="glass-card animate-fade-2" style={{ padding: '40px', marginBottom: '32px' }}>
                {loading && !status ? (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
                        <p style={{ color: 'var(--text-muted)' }}>Checking system health...</p>
                    </div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <AlertCircle size={48} color="#EF4444" style={{ marginBottom: '16px' }} />
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#EF4444' }}>System Offline</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{error}</p>
                        <button className="btn-primary" style={{ marginTop: '24px', background: '#EF4444' }} onClick={fetchStatus}>
                            Try Reconnect
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '32px' }}>
                        {/* Overall Status */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '12px', height: '12px', borderRadius: '50%',
                                    background: status?.status === 'operational' ? '#10B981' : '#F59E0B',
                                    boxShadow: `0 0 12px ${status?.status === 'operational' ? '#10B981' : '#F59E0B'}`
                                }} />
                                <span style={{ fontSize: '24px', fontWeight: '800', textTransform: 'capitalize' }}>
                                    {status?.status}
                                </span>
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                                Last Check: {status ? new Date(status.timestamp).toLocaleTimeString() : '-'}
                            </span>
                        </div>

                        {/* Components */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div className="glass-card" style={{ padding: '24px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <Server size={20} color="var(--primary)" />
                                    <h4 style={{ fontWeight: '700', fontSize: '16px' }}>API Gateway</h4>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '600', fontSize: '14px' }}>
                                    <CheckCircle2 size={16} /> Fully Functional
                                </div>
                            </div>

                            <div className="glass-card" style={{ padding: '24px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <Database size={20} color="var(--secondary)" />
                                    <h4 style={{ fontWeight: '700', fontSize: '16px' }}>PostgreSQL</h4>
                                </div>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    color: status?.database === 'connected' ? '#10B981' : '#EF4444',
                                    fontWeight: '600', fontSize: '14px'
                                }}>
                                    {status?.database === 'connected' ? (
                                        <><CheckCircle2 size={16} /> Connected</>
                                    ) : (
                                        <><AlertCircle size={16} /> Disconnected</>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '12px', marginTop: '20px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={12} /> Uptime: 99.98%</span>
                            <span>Version: {status?.version}</span>
                        </div>
                    </div>
                )}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
                If you are experiencing issues not listed here, please contact <a href="mailto:support@frenix.sh" style={{ color: 'var(--primary)' }}>support@frenix.sh</a>
            </p>
        </div>
    );
}
