import React from 'react';
import Link from 'next/link';
import { DownloaderForm } from '@/components/DownloaderForm';
import { TrustLedger } from '@/components/TrustLedger';
import { ToolDirectory } from '@/components/ToolDirectory';
import { WhyUsSection } from '@/components/WhyUsSection';
import { DeviceSupportTabs } from '@/components/DeviceSupportTabs';
import { CapabilitiesMatrix } from '@/components/CapabilitiesMatrix';
import { ResponsibleUseBlock } from '@/components/ResponsibleUseBlock';
import { FaqAccordion } from '@/components/FaqAccordion';
import { platformList } from '@/content/platforms';
import { ShieldCheck, ArrowRight, Zap, Radio } from 'lucide-react';

const homeFaqs = [
  {
    question: 'What is Dispatch and how does it work?',
    answer: 'Dispatch is an independent, ad-free frontend utility designed to resolve and download publicly available social media content (videos, reels, shorts, photos, and MP3 audio). It queries public content delivery networks (CDNs) directly without storing user data or requiring third-party accounts.',
  },
  {
    question: 'Is it completely free to download videos here?',
    answer: 'Yes, 100% free with no hidden charges, daily quotas, or premium subscription tiers. We believe essential public media archiving tools should be transparent and accessible to everyone.',
  },
  {
    question: 'Can I download private Instagram accounts or restricted posts?',
    answer: 'No. Dispatch has an absolute architectural rule: we strictly operate on publicly viewable web URLs. We never bypass passwords, login gates, private groups, or friends-only restrictions.',
  },
  {
    question: 'How do I download a video to my iPhone or Android phone?',
    answer: 'Simply copy the public link from your app, paste it into the Dispatch workbench in your mobile browser (Safari on iOS or Chrome on Android), and tap Download. The file is saved directly into your device Files or Downloads folder without needing extra apps.',
  },
  {
    question: 'Does Dispatch store copies of downloaded videos on its servers?',
    answer: 'No. Dispatch operates as a real-time stateless gateway. Video and audio packets stream directly to your device without being cached, saved, or logged on our servers.',
  },
  {
    question: 'Is it legal to download public media for personal offline study?',
    answer: 'Yes, saving publicly accessible web media for personal offline review, research, and non-commercial educational study is widely protected under international fair-use doctrines. You must not sell, redistribute, or monetize someone else work without permission.',
  },
  {
    question: 'Can I extract audio as an MP3 file from any video?',
    answer: 'Yes. Every public video inspection generates both full-definition video options (1080p/720p) and an extracted 320 kbps MP3 audio file option for saving speech, interviews, and music.',
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dispatch Public Media Wire',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free public social media downloader for Reels, Shorts, Videos, Photos, and MP3 audio.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section: Workbench (M05) Macrostructure */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 bg-grid-tactile border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper wire-border text-xs font-mono text-ink-muted">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <span>DISPATCH DESK · PUBLIC MEDIA WIRE</span>
            <span className="text-border-strong">/</span>
            <span className="text-ink font-semibold">ALL PLATFORMS READY</span>
          </div>

          {/* Main Display Headline (Purity: Roman, No Italic) */}
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-ink leading-[1.08] tracking-tight">
            The Honest Archive Utility for Public Media
          </h1>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Extract high-definition video, vertical reels, lossless photography, and studio-grade MP3 audio directly from public URLs. No adware, no tracking, and zero login barriers.
          </p>

          {/* Workbench Downloader Form */}
          <div className="pt-4">
            <DownloaderForm />
          </div>

          {/* Quick Platform Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            <span className="text-ink-faint">FAST DISPATCHES:</span>
            {platformList.map((plat) => (
              <Link
                key={plat.slug}
                href={'/' + plat.slug}
                className="px-2.5 py-1 wire-border bg-paper text-ink-muted hover:text-signal hover:border-signal transition-colors"
              >
                {plat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Header Ad Placement */}
      

      {/* Four Trust Points */}
      <TrustLedger />

      {/* Platform Tools Directory */}
      <ToolDirectory />

      {/* Why Us Comparison */}
      <WhyUsSection />

      {/* Device Workflows (Android, iPhone, Desktop) */}
      <DeviceSupportTabs />

      {/* Media Capabilities Matrix */}
      <CapabilitiesMatrix />

      {/* In-Content Ad Placement */}
      

      {/* Privacy & Responsible Use Block */}
      <ResponsibleUseBlock />

      {/* FAQ Accordion */}
      <FaqAccordion
        items={homeFaqs}
        heading="Frequently Asked Questions"
        subheading="Essential answers regarding video quality, supported platforms, privacy guarantees, and device compatibility."
      />

      {/* Closing Call To Action */}
      <section className="py-20 bg-paper-2 border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
            &bull; ARCHIVAL DESK READY
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-ink leading-tight">
            Begin Your Media Inspection
          </h2>
          <p className="font-sans text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
            Fast, verified stream extraction across Instagram, YouTube, TikTok, X, and more. Clean downloads without compromise.
          </p>
          <div className="pt-2">
            <a
              href="#top"
              className="inline-flex items-center gap-2 wire-btn py-3.5 px-8 text-sm uppercase tracking-wider font-mono"
            >
              <span>Scroll to Downloader</span>
              <ArrowRight className="w-4 h-4 text-signal" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
