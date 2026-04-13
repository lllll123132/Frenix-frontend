import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.frenix.sh'

    const staticPages = [
        // Core pages
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/docs`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${baseUrl}/models`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/status`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.6 },
        { url: `${baseUrl}/billing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/refund`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/playground`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },

        // SEO Landing Pages
        { url: `${baseUrl}/ai-gateway`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
        { url: `${baseUrl}/llm-gateway`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
        { url: `${baseUrl}/openai-compatible-api`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },

        // Comparison Pages
        { url: `${baseUrl}/compare/openrouter-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },

        // Use Case Pages
        { url: `${baseUrl}/use-cases/startups`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/use-cases/agents`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },

        // Integration Pages
        { url: `${baseUrl}/integrations/openai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/integrations/anthropic`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    ]

    return staticPages
}