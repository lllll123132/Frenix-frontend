import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/dashboard/', '/account/', '/api-keys/', '/team/', '/oauth/', '/test-oauth/', '/test-real-oauth/', '/demo-dropdown/', '/signin/'],
            },
        ],
        sitemap: 'https://www.frenix.sh/sitemap.xml',
    }
}