import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { platformsData, allPlatformSlugs } from '@/data/platforms';
import { PlatformPageTemplate } from '@/components/PlatformPageTemplate';

interface PlatformPageProps {
  params: Promise<{ platform: string }>;
}

export async function generateStaticParams() {
  return allPlatformSlugs.map((slug) => ({ platform: slug }));
}

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
  const { platform } = await params;
  const data = platformsData[platform];
  if (!data) return { title: 'Platform Not Found · Dispatch' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [
      `${data.name.toLowerCase()} downloader`,
      `download ${data.name.toLowerCase()} videos`,
      `save ${data.name.toLowerCase()} media`,
      `${data.name.toLowerCase()} to mp3`,
      'dispatch',
    ],
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      siteName: 'Dispatch',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { platform } = await params;
  const data = platformsData[platform];

  if (!data) {
    notFound();
  }

  return <PlatformPageTemplate platform={data} />;
}
