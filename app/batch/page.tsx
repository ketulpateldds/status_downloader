import React from 'react';
import type { Metadata } from 'next';
import { BatchDownloader } from '@/components/BatchDownloader';
import { BatchGuideSection } from '@/components/BatchGuideSection';

export const metadata: Metadata = {
  title: 'Batch Downloader & Bulk Archive Studio · Dispatch',
  description:
    'Download multiple videos, audio tracks, and photos at once in bulk. Supports TikTok, Instagram, YouTube, Twitter / X, Pinterest, Spotify, and more.',
  keywords: [
    'batch video downloader',
    'bulk video download',
    'download multiple youtube videos',
    'bulk tiktok downloader',
    'mass media downloader',
    'bulk audio extractor',
  ],
};

export default function BatchDownloaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f6fd] via-white to-[#edf2fb] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <BatchDownloader />
        <BatchGuideSection />
      </div>
    </div>
  );
}
