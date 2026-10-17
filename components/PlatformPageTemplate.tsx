"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlatformData, platformsData } from "@/data/platforms";
import { DownloaderForm } from "./DownloaderForm";
import { PlatformAppTile } from "./PlatformIcon";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Smartphone,
  Laptop,
  Apple,
  ArrowRight,
  Sparkles,
  Info,
  ChevronDown,
  Film,
  Music,
  Image as ImageIcon,
  Clock,
  Layers,
  Video,
  FileText,
  Lock,
} from "lucide-react";

interface PlatformPageTemplateProps {
  platform: PlatformData;
}

export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  const [deviceTab, setDeviceTab] = useState<"iphone" | "android" | "desktop">(
    "iphone",
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: platform.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dispatch.local",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: platform.name,
        item: `https://dispatch.local/${platform.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pb-10">
        {/* 1. Hero Section tinted with platform brand color (Side-by-Side Layout) */}
        <section className="relative pt-6 sm:pt-10 pb-10 overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[400px] opacity-15 blur-3xl pointer-events-none rounded-full"
            style={{ backgroundColor: platform.brandColor }}
          />
          <div className="absolute top-1/4 left-10 w-[400px] h-[300px] bg-brand-blue/10 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Column: Heading, intro, and platform highlights */}
              <div className="lg:col-span-5 space-y-5 text-left">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-navy-muted">
                  <Link
                    href="/"
                    className="hover:text-brand-blue transition-colors"
                  >
                    Home
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-navy">{platform.name}</span>
                </nav>

                {/* Platform badge with Real Logo */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-navy">
                  <PlatformAppTile
                    platform={platform.slug}
                    className="w-5 h-5 rounded-md"
                    iconClassName="w-3 h-3"
                  />
                  <span>{platform.name} Downloader</span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-extrabold text-3xl sm:text-4xl xl:text-5xl text-navy tracking-tight leading-[1.12]">
                  {platform.heroH1}
                </h1>

                {/* Subtext Promise */}
                <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
                  {platform.intro}
                </p>

                {/* Platform Highlights Checkmarks */}
                <div className="pt-2 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Crystal-clear 1080p, 4K & 320kbps MP3 audio</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>100% Free, Unlimited & Watermark-Free</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Instant download for iPhone, Android, Mac & PC</span>
                  </div>
                </div>

                {/* Format Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-navy-muted">
                  <span className="text-slate-400">Supported:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy font-bold shadow-xs">
                    MP4 Video
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy font-bold shadow-xs">
                    MP3 Audio
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy font-bold shadow-xs">
                    1080p / 4K
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy font-bold shadow-xs">
                    Reels & Shorts
                  </span>
                </div>
              </div>

              {/* Right Column: Download Box for that specific platform */}
              <div className="lg:col-span-7 w-full">
                <DownloaderForm
                  defaultPlatformSlug={platform.slug}
                  customPlaceholder={platform.examplePlaceholder}
                  hideSupportedChips={true}
                  hideTabs={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. What You Can Save */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              What You Can Save from {platform.name}
            </h2>
            <p className="text-sm sm:text-base text-navy-muted">
              Everything is saved in original high definition with clear sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platform.supportedContentTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft card-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: platform.brandColor }}
                  >
                    <Film className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-navy">{item.title}</h3>
                  <p className="text-sm text-navy-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-navy-muted">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How to Download in 3 Steps */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-band-gradient rounded-3xl sm:rounded-4xl p-8 sm:p-12 text-white shadow-card">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How to Download from {platform.name} in 3 Simple Steps
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                Fast, free, and works without installing any software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {platform.steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-3xl p-6 sm:p-8 text-navy shadow-soft space-y-3 relative"
                >
                  <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-navy">{step.title}</h3>
                  <p className="text-sm text-navy-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Device Support Tabs */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Works on Every Device
            </h2>
            <p className="text-sm sm:text-base text-navy-muted">
              Choose your device to see where your downloaded files are stored.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-card space-y-6">
            {/* Device tabs */}
            <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-2xl max-w-md mx-auto">
              <button
                onClick={() => setDeviceTab("iphone")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  deviceTab === "iphone"
                    ? "bg-white text-navy shadow-sm"
                    : "text-navy-muted hover:text-navy"
                }`}
              >
                <Apple className="w-4 h-4" />
                <span>iPhone / iPad</span>
              </button>

              <button
                onClick={() => setDeviceTab("android")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  deviceTab === "android"
                    ? "bg-white text-navy shadow-sm"
                    : "text-navy-muted hover:text-navy"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Android</span>
              </button>

              <button
                onClick={() => setDeviceTab("desktop")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  deviceTab === "desktop"
                    ? "bg-white text-navy shadow-sm"
                    : "text-navy-muted hover:text-navy"
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>PC / Mac</span>
              </button>
            </div>

            {/* Device Instructions */}
            <div className="max-w-xl mx-auto space-y-3 pt-2">
              {platform.deviceTips[deviceTab].map((instruction, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-navy"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Quality & Format Options */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Quality & Format Options
            </h2>
            <p className="text-sm sm:text-base text-navy-muted">
              Select the best format and resolution for your needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase text-navy-muted">
                  <tr>
                    <th className="px-6 py-4">Format</th>
                    <th className="px-6 py-4">Quality Tier</th>
                    <th className="px-6 py-4">Resolution</th>
                    <th className="px-6 py-4">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {platform.qualityOptions.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-bold text-navy">
                        {row.format}
                      </td>
                      <td className="px-6 py-4 text-navy font-semibold">
                        {row.quality}
                      </td>
                      <td className="px-6 py-4 text-navy-muted">
                        {row.resolution}
                      </td>
                      <td className="px-6 py-4 text-xs text-navy-muted">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Tips & Good to Know */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-blue-50/60 rounded-3xl border border-blue-100 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 font-bold text-navy text-lg">
              <Info className="w-5 h-5 text-brand-blue" />
              <span>Good to Know Before Downloading</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {platform.tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-blue-100 space-y-1.5"
                >
                  <h4 className="font-bold text-sm text-navy">{tip.title}</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Platform Specific FAQ */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-navy-muted">
                Common questions about saving media from {platform.name}.
              </p>
            </div>

            <div className="space-y-3">
              {platform.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-soft transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-navy hover:text-brand-blue"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-blue" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-navy-muted leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Related Platforms & Tools */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Related Tools & Platforms
            </h2>
            <p className="text-sm sm:text-base text-navy-muted">
              Download and convert from other popular services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platform.relatedSlugs.map((slug) => {
              const rel = platformsData[slug];
              if (!rel) return null;
              return (
                <Link
                  key={slug}
                  href={`/${rel.slug}`}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft card-hover text-center space-y-2 block"
                >
                  <PlatformAppTile
                    platform={rel.slug}
                    className="w-12 h-12 rounded-2xl mx-auto shadow-sm"
                    iconClassName="w-6 h-6"
                  />
                  <h3 className="font-bold text-sm text-navy">{rel.name}</h3>
                  <div className="text-xs text-navy-muted">{rel.shortDesc}</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 9. Policy Note */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-center text-navy-muted space-y-1">
            <div className="font-semibold text-navy">
              Respect Copyright & Creator Rights
            </div>
            <p>
              Only download public content that you own or have permission to
              save. Dispatch supports ethical personal use and fair use study.
              Read our full{" "}
              <Link
                href="/dmca"
                className="text-brand-blue hover:underline font-semibold"
              >
                DMCA Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
