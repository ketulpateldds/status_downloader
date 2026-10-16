import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { allPlatforms, platformList } from '@/content/platforms';
import { DownloaderForm } from '@/components/DownloaderForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowRight,
  Smartphone,
  Apple,
  Monitor
} from 'lucide-react';

interface PlatformPageProps {
  params: Promise<{ platform: string }>;
}

export async function generateStaticParams() {
  return platformList.map((p) => ({ platform: p.slug }));
}

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
  const { platform } = await params;
  const content = allPlatforms[platform];
  if (!content) return { title: 'Platform Not Found' };

  return {
    title: `${content.name} Downloader · ${content.heroH1}`,
    description: content.heroSubtitle,
    keywords: [
      `${content.name} downloader`,
      `download public ${content.name}`,
      `save ${content.name} video`,
      content.slug,
    ],
    openGraph: {
      title: `${content.name} Downloader · Dispatch Media Wire`,
      description: content.heroSubtitle,
    },
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { platform } = await params;
  const content = allPlatforms[platform];

  if (!content) {
    notFound();
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dispatch.local',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.name,
        item: `https://dispatch.local/${content.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Platform Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 bg-grid-tactile border-b border-border">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          {/* Breadcrumb Nav */}
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-ink-muted">
            <Link href="/" className="hover:text-ink">HOME</Link>
            <span>/</span>
            <span className="text-signal font-semibold">{content.slug.toUpperCase()} DESK</span>
          </nav>

          {/* Heading */}
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
            {content.heroH1}
          </h1>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            {content.heroSubtitle}
          </p>

          {/* Platform Specific Downloader Box */}
          <div className="pt-2">
            <DownloaderForm
              defaultPlatformSlug={content.slug}
              customPlaceholder={content.placeholderText}
            />
          </div>

          {/* Tool Modes Tabs Indicator */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <span className="text-ink-faint">MODES:</span>
            {content.toolModes.map((m) => (
              <span
                key={m.id}
                title={m.hint}
                className="px-3 py-1 bg-paper wire-border text-ink cursor-help hover:border-signal"
              >
                &bull; {m.label}
              </span>
            ))}
          </div>

          <div className="text-[11px] font-mono text-ink-faint">
            ACCEPTED EXAMPLES: {content.acceptedLinkExamples[0]}
          </div>
        </div>
      </section>

      

      {/* Render sections according to that platform's unique sectionOrder */}
      <div className="space-y-24 py-12">
        {content.sectionOrder.map((sectionName) => {
          if (sectionName === 'how-to') {
            return (
              <section key="how-to" className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 pb-4 border-b border-border flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
                      &bull; DEVICE HOW-TO MANUAL
                    </span>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                      How to Save {content.name} Media by Device
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-ink-faint">
                    REAL APPLICATION STEPS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* iPhone */}
                  <div className="wire-card p-6 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-signal">
                      <Apple className="w-4 h-4" />
                      <span>IPHONE & IPAD</span>
                    </div>
                    <ol className="space-y-3 font-sans text-xs text-ink-muted list-decimal list-inside leading-relaxed">
                      <li>In {content.name}, tap the Share arrow or three dots.</li>
                      <li>Select <strong>Copy Link</strong> to place URL on clipboard.</li>
                      <li>Open mobile Safari, paste link into Dispatch, and select resolution.</li>
                      <li>Safari downloads to Files. Open file, tap Share, and tap <strong>Save Video</strong>.</li>
                    </ol>
                  </div>

                  {/* Android */}
                  <div className="wire-card p-6 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-signal">
                      <Smartphone className="w-4 h-4" />
                      <span>ANDROID DEVICES</span>
                    </div>
                    <ol className="space-y-3 font-sans text-xs text-ink-muted list-decimal list-inside leading-relaxed">
                      <li>Tap the Share icon under the {content.name} post and tap <strong>Copy Link</strong>.</li>
                      <li>Open Chrome or Firefox, paste into Dispatch, and tap Inspect Stream.</li>
                      <li>Choose format (MP4/MP3) and tap Download.</li>
                      <li>File saves to system Downloads and appears directly in Google Photos/Gallery.</li>
                    </ol>
                  </div>

                  {/* Desktop */}
                  <div className="wire-card p-6 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-signal">
                      <Monitor className="w-4 h-4" />
                      <span>COMPUTER (PC/MAC)</span>
                    </div>
                    <ol className="space-y-3 font-sans text-xs text-ink-muted list-decimal list-inside leading-relaxed">
                      <li>Copy the URL directly from your desktop browser address bar.</li>
                      <li>Paste into Dispatch for instant manifest inspection.</li>
                      <li>Click Download. High-speed stream delivers master file to your PC Downloads folder.</li>
                      <li>Compatible with VLC Player, QuickTime, and all desktop editors.</li>
                    </ol>
                  </div>
                </div>
              </section>
            );
          }

          if (sectionName === 'behavior') {
            return (
              <section key="behavior" className="bg-paper-2 py-16 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="max-w-3xl mb-10 space-y-2">
                    <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
                      &bull; STREAM LIFECYCLE & BOUNDARIES
                    </span>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                      {content.behaviorExplanation.heading}
                    </h2>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed">
                      {content.behaviorExplanation.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Can Save */}
                    <div className="bg-paper p-6 wire-border space-y-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-signal" />
                        <span>What This Tool CAN Save</span>
                      </div>
                      <ul className="space-y-2 font-sans text-xs text-ink-muted">
                        {content.behaviorExplanation.canSave.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-signal font-bold">&check;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cannot Save */}
                    <div className="bg-paper p-6 wire-border space-y-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                        <XCircle className="w-4 h-4 text-ink-faint" />
                        <span>What This Tool CANNOT Save</span>
                      </div>
                      <ul className="space-y-2 font-sans text-xs text-ink-muted">
                        {content.behaviorExplanation.cannotSave.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-ink-faint font-bold">&times;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (sectionName === 'table') {
            return (
              <section key="table" className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 pb-4 border-b border-border">
                  <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
                    &bull; MATRIX COMPARISON
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                    {content.name} Content Types & Specifications
                  </h2>
                </div>

                <div className="wire-border overflow-x-auto bg-paper">
                  <table className="w-full text-left font-sans text-xs border-collapse">
                    <thead>
                      <tr className="bg-paper-2 border-b border-border font-mono text-[11px] text-ink-muted uppercase">
                        <th className="p-4">Content Type</th>
                        <th className="p-4">Availability Window</th>
                        <th className="p-4">Delivery Format</th>
                        <th className="p-4">Recommended Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {content.comparisonTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-paper-hover transition-colors">
                          <td className="p-4 font-bold text-ink">{row.name}</td>
                          <td className="p-4 font-mono text-ink-muted">{row.availability}</td>
                          <td className="p-4 font-mono text-signal">{row.supportedFormats}</td>
                          <td className="p-4 text-ink-muted">{row.recommendedUse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          }

          if (sectionName === 'cards') {
            return (
              <section key="cards" className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 pb-4 border-b border-border">
                  <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
                    &bull; DOWNLOADABLE ASSETS
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                    Supported {content.name} Stream Formats
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.contentCards.map((card, idx) => (
                    <div key={idx} className="wire-card p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <span className="font-mono text-[10px] text-signal font-semibold px-2 py-0.5 bg-paper-2 border border-border inline-block">
                          {card.badge}
                        </span>
                        <h3 className="font-serif font-bold text-lg text-ink">
                          {card.title}
                        </h3>
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-border-subtle">
                        <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                          {card.formats.map((f, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-paper-2 border border-border-subtle text-ink">
                              {f}
                            </span>
                          ))}
                        </div>
                        <p className="font-mono text-[10px] text-ink-faint leading-normal">
                          &bull; {card.honestLimitation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (sectionName === 'use-cases') {
            return (
              <section key="use-cases" className="bg-paper-2 py-16 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="mb-8 pb-4 border-b border-border">
                    <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
                      &bull; REAL-WORLD APPLICATIONS
                    </span>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                      Why People Archive {content.name} Media
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.useCases.map((uc, idx) => (
                      <div key={idx} className="bg-paper p-6 wire-border space-y-3 shadow-tactile-sm">
                        <div className="font-mono text-[10px] text-signal font-bold uppercase">
                          {uc.persona}
                        </div>
                        <h3 className="font-serif font-bold text-base text-ink">
                          {uc.title}
                        </h3>
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {uc.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (sectionName === 'troubleshooting') {
            return (
              <section key="troubleshooting" className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 pb-4 border-b border-border">
                  <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
                    &bull; DIAGNOSTIC DIRECTORY
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                    Troubleshooting Common {content.name} Issues
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.troubleshooting.map((item, idx) => (
                    <div key={idx} className="wire-card p-6 space-y-3">
                      <div className="flex items-center gap-2 font-serif font-bold text-base text-ink">
                        <AlertTriangle className="w-4 h-4 text-signal shrink-0" />
                        <span>{item.problem}</span>
                      </div>
                      <div className="font-mono text-[11px] text-ink-faint">
                        CAUSE: {item.cause}
                      </div>
                      <div className="font-sans text-xs text-ink-muted pt-2 border-t border-border-subtle leading-relaxed">
                        <strong>RESOLUTION:</strong> {item.resolution}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (sectionName === 'faqs') {
            return (
              <FaqAccordion
                key="faqs"
                items={content.faqs}
                heading={`${content.name} Downloader FAQ`}
                subheading={`Platform-specific answers regarding ${content.name} resolution limits, audio extraction, and device playback.`}
              />
            );
          }

          return null;
        })}
      </div>

      {/* Closing Call to Action for Platform */}
      <section className="py-20 bg-paper-2 border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
            &bull; {content.slug.toUpperCase()} WORKBENCH
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
            {content.closingCta.heading}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
            {content.closingCta.subheading}
          </p>
          <div className="pt-2">
            <a
              href="#top"
              className="inline-flex items-center gap-2 wire-btn py-3 px-8 text-xs font-mono uppercase tracking-wider"
            >
              <span>{content.closingCta.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-signal" />
            </a>
          </div>

          {/* Links to Other Platform Tools */}
          <div className="pt-8 border-t border-border-subtle">
            <span className="font-mono text-xs text-ink-faint block mb-3">
              OR SWITCH TO ANOTHER PUBLIC WIRE TOOL:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
              {platformList
                .filter((p) => p.slug !== content.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={'/' + other.slug}
                    className="px-2.5 py-1 bg-paper wire-border text-ink-muted hover:text-signal hover:border-signal"
                  >
                    {other.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
