module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient,
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://pmglmcvceitpcvrlpjhp.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZ2xtY3ZjZWl0cGN2cmxwamhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0OTcxOTUsImV4cCI6MjA4NzA3MzE5NX0.HKfvOcmtsKRyyb3Ffw9ajGcjMA4CEJqo0B0evl0PuM0"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
async function createAdminClient() {
    const supabaseUrl = ("TURBOPACK compile-time value", "https://pmglmcvceitpcvrlpjhp.supabase.co");
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
        console.error('Missing Supabase Admin environment variables:', {
            url: !!supabaseUrl,
            key: !!serviceRoleKey
        });
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, serviceRoleKey, {
        cookies: {
            getAll () {
                return [];
            },
            setAll () {}
        }
    });
}
}),
"[project]/src/lib/gateway.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminFetchUsers",
    ()=>adminFetchUsers,
    "adminUpdateUserStatus",
    ()=>adminUpdateUserStatus,
    "adminUpgradeUser",
    ()=>adminUpgradeUser,
    "createGatewayKey",
    ()=>createGatewayKey,
    "fetchStats",
    ()=>fetchStats,
    "fetchStatsByEmail",
    ()=>fetchStatsByEmail
]);
/**
 * Gateway API helper
 * All calls go to the self-hosted AI Gateway (default: http://localhost:4000).
 */ const BASE = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:4000';
const SERVICE_KEY = process.env.GATEWAY_SERVICE_KEY || '';
async function fetchStats(apiKey) {
    const res = await fetch(`${BASE}/v1/keys/stats`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        },
        cache: 'no-store'
    });
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
}
async function fetchStatsByEmail(email) {
    const res = await fetch(`${BASE}/v1/keys/email/${encodeURIComponent(email)}`, {
        headers: SERVICE_KEY ? {
            Authorization: `Bearer ${SERVICE_KEY}`
        } : {},
        cache: 'no-store'
    });
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
}
async function createGatewayKey(params) {
    const res = await fetch(`${BASE}/v1/keys`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const body = await res.json().catch(()=>({}));
    if (!res.ok) {
        // 409 = user already has a key
        throw Object.assign(new Error(body.message || `HTTP ${res.status}`), {
            status: res.status,
            body
        });
    }
    return body;
}
async function adminFetchUsers(creds) {
    const auth = btoa(`${creds.username}:${creds.password}`);
    const res = await fetch(`${BASE}/v1/admin/users`, {
        headers: {
            Authorization: `Basic ${auth}`
        },
        cache: 'no-store'
    });
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
}
async function adminUpgradeUser(creds, userId, tier) {
    const auth = btoa(`${creds.username}:${creds.password}`);
    const res = await fetch(`${BASE}/v1/admin/upgrade`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${auth}`
        },
        body: JSON.stringify({
            userId,
            tier
        })
    });
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
}
async function adminUpdateUserStatus(creds, userId, status) {
    const auth = btoa(`${creds.username}:${creds.password}`);
    const res = await fetch(`${BASE}/v1/admin/status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${auth}`
        },
        body: JSON.stringify({
            userId,
            status
        })
    });
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
}
}),
"[project]/src/app/api/gateway/keys/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gateway$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gateway.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
;
;
;
;
;
async function POST(req) {
    let user;
    const authHeader = req.headers.get('Authorization');
    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.substring(7);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://pmglmcvceitpcvrlpjhp.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZ2xtY3ZjZWl0cGN2cmxwamhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0OTcxOTUsImV4cCI6MjA4NzA3MzE5NX0.HKfvOcmtsKRyyb3Ffw9ajGcjMA4CEJqo0B0evl0PuM0"), {
            cookies: {
                getAll: ()=>[],
                setAll: ()=>{}
            }
        });
        const { data: { user: u } } = await supabase.auth.getUser(token);
        user = u;
    } else {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user: u } } = await supabase.auth.getUser();
        user = u;
    }
    if (!user?.email) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unauthorized'
    }, {
        status: 401
    });
    const sessionUser = {
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0]
    };
    const email = sessionUser.email;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const body = await req.json().catch(()=>({}));
    try {
        // First check if the user already has a key via the backend
        try {
            const existingStats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gateway$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchStatsByEmail"])(email);
            if (existingStats && existingStats.fullKey) {
                // Key already exists, set it as cookie and return it immediately
                cookieStore.set('frenix_gateway_key', existingStats.fullKey, {
                    httpOnly: true,
                    secure: ("TURBOPACK compile-time value", "development") === 'production',
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24 * 365,
                    path: '/'
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    key: existingStats.fullKey,
                    tier: existingStats.tier,
                    email: existingStats.email,
                    message: "Retrieved existing key."
                }, {
                    status: 200
                });
            }
        } catch (checkErr) {
        // Ignore if not found, proceed to create it
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gateway$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGatewayKey"])({
            email,
            name: sessionUser.name?.split(' ')[0] || undefined,
            lastName: sessionUser.name?.split(' ').slice(1).join(' ') || undefined,
            username: user.user_metadata?.user_name || undefined,
            ...body
        });
        // Store the key in a secure HTTP-Only cookie so it survives server restarts
        cookieStore.set('frenix_gateway_key', result.key, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 365,
            path: '/'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            status: 201
        });
    } catch (err) {
        const status = typeof err.status === 'number' ? err.status : 500;
        if (err.body && typeof err.body === 'object') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(err.body, {
                status
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c3a2b95._.js.map