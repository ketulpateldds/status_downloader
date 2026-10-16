import { MetadataRoute } from 'next';
import { platformList } from '@/content/platforms';
import { sampleArticles } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dispatch.local';

  const staticPages = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/dmca',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  const platformPages = platformList.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const blogPages = sampleArticles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...platformPages, ...blogPages];
}
