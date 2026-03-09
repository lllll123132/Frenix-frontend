'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Key, Send, Loader2, MessageSquare, AlertCircle, Settings2, Trash2, StopCircle, Check } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const GATEWAY = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:3000';

type Message = { role: 'user' | 'assistant' | 'system', content: string };

export default function PlaygroundPage() {
    const [apiKey, setApiKey] = useState('');
    const [apiUrl, setApiUrl] = useState(GATEWAY);
    const [model, setModel] = useState('provider-1/llama-3.1-8b-instruct');
    const [systemPrompt, setSystemPrompt] = useState('You are a helpful AI assistant.');
    const [temperature, setTemperature] = useState(0.7);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [models, setModels] = useState<{ id: string }[]>([]);
    const [isLoadingModels, setIsLoadingModels] = useState(false);

    // Auth visibility
    const [showSettings, setShowSettings] = useState(true);

    const abortControllerRef = useRef<AbortController | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Save/load API key and URL from localStorage
    useEffect(() => {
        const storedKey = localStorage.getItem('frenix_playground_key');
        if (storedKey) setApiKey(storedKey);

        const storedUrl = localStorage.getItem('frenix_playground_url');
        if (storedUrl) setApiUrl(storedUrl);
    }, []);

    const handleSaveKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setApiKey(val);
        localStorage.setItem('frenix_playground_key', val);
    };

    const handleSaveUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setApiUrl(val);
        localStorage.setItem('frenix_playground_url', val);
    };

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isGenerating]);

    // Fetch models when API key or URL changes
    useEffect(() => {
        if (!apiKey || apiKey.length < 15 || !apiUrl) return;

        const fetchModels = async () => {
            setIsLoadingModels(true);
            try {
                // remove trailing slash from URL
                let normalizedUrl = apiUrl.replace(/\/$/, '');
                if (!normalizedUrl.startsWith('http')) {
                    normalizedUrl = `http://${normalizedUrl}`;
                }
                const res = await fetch(`${normalizedUrl}/v1/models`, {
                    headers: { 'Authorization': `Bearer ${apiKey}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.data && Array.isArray(data.data)) {
                        setModels(data.data);
                        // Only set initial model if currently empty or default
                        if (!model || model === 'provider-1/llama-3.1-8b-instruct') {
                            if (data.data.length > 0) setModel(data.data[0].id);
                        }
                    }
                }
            } catch (error) {
                // Ignore fetch errors silently in playground
            } finally {
                setIsLoadingModels(false);
            }
        };
        fetchModels();
    }, [apiKey, apiUrl]);

    const handleStop = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        setIsGenerating(false);
    };

    const handleSend = async () => {
        if (!input.trim() || !apiKey) {
            if (!apiKey) toast.error('API Key required', { description: 'Please enter your Frenix API key in settings.' });
            return;
        }

        const userMsg = input.trim();
        setInput('');

        const currentMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
        setMessages(currentMessages);
        setIsGenerating(true);

        abortControllerRef.current = new AbortController();

        try {
            // Build the payload
            const apiMessages = [];
            if (systemPrompt.trim()) {
                apiMessages.push({ role: 'system', content: systemPrompt.trim() });
            }
            apiMessages.push(...currentMessages);

            let normalizedUrl = apiUrl.replace(/\/$/, '');
            if (!normalizedUrl.startsWith('http')) {
                normalizedUrl = `http://${normalizedUrl}`;
            }
            const response = await fetch(`${normalizedUrl}/v1/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'text/event-stream'
                },
                body: JSON.stringify({
                    model,
                    messages: apiMessages,
                    temperature,
                    stream: true
                }),
                signal: abortControllerRef.current.signal
            });

            if (!response.ok) {
                const errBody = await response.json().catch(() => ({}));
                throw new Error(errBody.error?.message || errBody.message || `HTTP ${response.status}`);
            }

            if (!response.body) throw new Error('No response stream');

            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let assistantMsg = '';

            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                        try {
                            const data = JSON.parse(line.slice(6));
                            if (data.choices && data.choices[0]?.delta?.content) {
                                assistantMsg += data.choices[0].delta.content;
                                setMessages(prev => {
                                    const newMsgs = [...prev];
                                    newMsgs[newMsgs.length - 1].content = assistantMsg;
                                    return newMsgs;
                                });
                            }
                        } catch (e) {
                            // parse error on incomplete chunk
                        }
                    }
                }
            }
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                toast.error('Chat Error', { description: error.message });
                setMessages(prev => [...prev, { role: 'system', content: `Error: ${error.message}` }]);
            }
        } finally {
            setIsGenerating(false);
            abortControllerRef.current = null;
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12 h-[calc(100vh-56px)] flex flex-col">
            <header className="flex items-center justify-between pb-6 mb-6 border-b border-white/5 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-foreground text-background flex items-center justify-center shadow-lg">
                        <MessageSquare className="size-5" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-foreground">Playground</h1>
                        <p className="text-sm text-muted-foreground font-medium mt-0.5">Test models directly against the Frenix Gateway API</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                        showSettings ? "bg-white/10 text-foreground" : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    )}
                >
                    <Settings2 size={16} />
                    Configuration
                </button>
            </header>

            <div className="flex gap-6 flex-1 min-h-0">

                {/* ── Main Chat Area ── */}
                <div className="flex-1 flex flex-col glass-card overflow-hidden shadow-2xl relative bg-bg-card/50 backdrop-blur-xl">

                    {/* Chat History */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-muted-foreground/50 space-y-4">
                                <MessageSquare size={48} className="opacity-20" />
                                <p className="font-medium text-sm">Send a message to start chatting</p>
                            </div>
                        ) : (
                            messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={cn(
                                        "flex gap-4 max-w-[85%]",
                                        msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto",
                                        msg.role === 'system' && "mx-auto text-rose-500 max-w-full"
                                    )}
                                >
                                    {msg.role !== 'system' && (
                                        <div className={cn(
                                            "shrink-0 size-8 rounded-full flex items-center justify-center mt-1",
                                            msg.role === 'user' ? "bg-primary text-primary-foreground" : "bg-white/10 text-foreground"
                                        )}>
                                            {msg.role === 'user' ? 'U' : 'AI'}
                                        </div>
                                    )}
                                    <div className={cn(
                                        "px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm",
                                        msg.role === 'user' ? "bg-foreground text-background rounded-tr-sm" :
                                            msg.role === 'system' ? "bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono" :
                                                "bg-bg-soft border border-border rounded-tl-sm text-text-main whitespace-pre-wrap"
                                    )}>
                                        {msg.content || (isGenerating && i === messages.length - 1 ? <span className="animate-pulse">...</span> : '')}
                                    </div>
                                </motion.div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-bg-card/80 border-t border-border/40 backdrop-blur-xl">
                        <div className="relative flex items-center bg-bg-soft border border-border rounded-2xl focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20 transition-all p-2 shadow-sm">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Message Frenix Gateway..."
                                className="flex-1 bg-transparent border-none outline-none px-3 text-[15px] text-text-main placeholder:text-text-muted h-10 font-medium"
                            />
                            {isGenerating ? (
                                <button
                                    onClick={handleStop}
                                    className="shrink-0 size-10 rounded-xl bg-rose-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                                >
                                    <StopCircle size={18} fill="currentColor" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || !apiKey}
                                    className="shrink-0 size-10 rounded-xl bg-foreground text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100"
                                >
                                    <Send size={16} className="-ml-0.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Settings Sidebar ── */}
                <AnimatePresence>
                    {showSettings && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0, scale: 0.95 }}
                            animate={{ width: 340, opacity: 1, scale: 1 }}
                            exit={{ width: 0, opacity: 0, scale: 0.95 }}
                            className="shrink-0 glass-card p-6 space-y-8 overflow-y-auto bg-bg-card/50 backdrop-blur-xl"
                        >
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    <Key size={14} /> Authentication
                                </h3>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-foreground">API Key</label>
                                    <input
                                        type="password"
                                        value={apiKey}
                                        onChange={handleSaveKey}
                                        placeholder="sk-frenix-..."
                                        className="account-input"
                                    />
                                    <p className="text-[11px] text-muted-foreground/60 leading-relaxed font-medium">
                                        Your key is locally stored.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-foreground">Gateway Base URL</label>
                                    <input
                                        type="text"
                                        value={apiUrl}
                                        onChange={handleSaveUrl}
                                        placeholder="https://api.frenix.sh"
                                        className="account-input"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Configuration</h3>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-foreground flex justify-between items-center">
                                        Model ID
                                        {isLoadingModels && <Loader2 size={10} className="animate-spin opacity-50" />}
                                    </label>

                                    {models.length > 0 ? (
                                        <select
                                            value={model}
                                            onChange={e => setModel(e.target.value)}
                                            className="account-input appearance-none bg-no-repeat bg-[right_12px_center] bg-[length:16px]"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                        >
                                            {models.map(m => (
                                                <option key={m.id} value={m.id} className="bg-bg-card text-text-main">
                                                    {m.id}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            value={model}
                                            onChange={e => setModel(e.target.value)}
                                            placeholder="Enter model ID..."
                                            className="account-input"
                                        />
                                    )}
                                    <p className="text-[10px] text-muted-foreground/60 font-medium">
                                        {models.length > 0 ? `${models.length} models available` : 'Connect key to browse models'}
                                    </p>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <label className="text-xs font-bold text-foreground">Temperature <span className="text-muted-foreground font-normal ml-1">({temperature})</span></label>
                                    <input
                                        type="range" min="0" max="2" step="0.1"
                                        value={temperature}
                                        onChange={e => setTemperature(parseFloat(e.target.value))}
                                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white cursor-pointer"
                                    />
                                </div>

                                <div className="space-y-2 pt-2">
                                    <label className="text-xs font-bold text-foreground flex justify-between">
                                        System Prompt
                                    </label>
                                    <textarea
                                        value={systemPrompt}
                                        onChange={e => setSystemPrompt(e.target.value)}
                                        rows={4}
                                        placeholder="You are a helpful assistant..."
                                        className="account-input resize-none"
                                    />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border/40">
                                <button
                                    onClick={() => setMessages([])}
                                    disabled={messages.length === 0}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-bg-soft text-text-muted hover:bg-rose-500/10 hover:text-rose-500 disabled:opacity-50 disabled:pointer-events-none transition-all border border-border hover:border-rose-500/20"
                                >
                                    <Trash2 size={16} />
                                    Clear Chat
                                </button>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
