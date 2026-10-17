"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DownloaderForm } from "@/components/DownloaderForm";
import { popularPlatformsList } from "@/data/platforms";
import { PlatformAppTile } from "@/components/PlatformIcon";
import { ShowcaseVideo } from "@/components/ShowcaseVideo";
import { conversionTools } from "@/data/tools";
import { siteStats } from "@/data/stats";
import { homeFaqs } from "@/data/faq";
import { sampleArticles } from "@/content/blog";
import { popularSitesChips } from "@/data/supportedSites";
import {
  Download,
  CheckCircle2,
  Sparkles,
  Globe,
  Smartphone,
  ArrowRight,
  Zap,
  ShieldCheck,
  Laptop,
  ChevronDown,
  HelpCircle,
  Play,
  Music,
  Video,
  Image as ImageIcon,
  Minimize2,
  Star,
  Users,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dispatch",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free online video and audio downloader for YouTube, Instagram, TikTok, Facebook, X, Pinterest, and Snapchat.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="overflow-hidden">
        {/* =========================================================================
            SECTION 1: HERO + DOWNLOADER BOX (OVERLAPPING)
           ========================================================================= */}
        <section className="relative pt-8 sm:pt-14 pb-10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Top Grid: Copy on Left, Floating Tiles on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 sm:pb-16">
              {/* Left Column: Headlines & Feature Badges */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ALL-IN-ONE MEDIA TOOLKIT</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                  Download, Convert <br className="hidden sm:block" />
                  and Save{" "}
                  <span className="text-brand-gradient">Any Media</span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-navy-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Paste a link, pick a format, and get your video, music or
                  photo in seconds. Free, safe and easy &mdash; no technical
                  skills needed.
                </p>

                {/* 4 Feature Badges in a Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs text-navy leading-tight">
                        100% Free
                      </div>
                      <div className="text-[11px] text-navy-muted leading-tight">
                        No registration
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs text-navy leading-tight">
                        High Quality
                      </div>
                      <div className="text-[11px] text-navy-muted leading-tight">
                        Up to 8K
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs text-navy leading-tight">
                        Fast Save
                      </div>
                      <div className="text-[11px] text-navy-muted leading-tight">
                        Direct stream
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs text-navy leading-tight">
                        Any Device
                      </div>
                      <div className="text-[11px] text-navy-muted leading-tight">
                        Phone, Mac, PC
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Platform Tiles Visual */}
              <div className="lg:col-span-5 relative flex items-center justify-center py-6">
                {/* 8K Ultra HD Badge */}
                <div className="absolute top-0 right-4 z-20 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3.5 py-1.5 rounded-2xl shadow-lg shadow-amber-500/20 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>8K ULTRA HD</span>
                </div>

                {/* Floating Decorative Tiles Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                  {/* Center Blue Download Tile */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-brand-gradient shadow-hover flex items-center justify-center text-white z-10 animate-float-slow">
                    <Download
                      className="w-12 h-12 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* YouTube Tile */}
                  <div className="absolute top-4 left-6 animate-float-alt">
                    <PlatformAppTile
                      platform="youtube"
                      className="w-14 h-14 rounded-2xl shadow-md"
                      iconClassName="w-7 h-7"
                    />
                  </div>

                  {/* Instagram Tile */}
                  <div className="absolute top-0 right-20 animate-float-slow">
                    <PlatformAppTile
                      platform="instagram"
                      className="w-14 h-14 rounded-2xl shadow-md"
                      iconClassName="w-7 h-7"
                    />
                  </div>

                  {/* TikTok Tile */}
                  <div className="absolute top-12 right-4 animate-float-alt">
                    <PlatformAppTile
                      platform="tiktok"
                      className="w-13 h-13 rounded-2xl shadow-md"
                      iconClassName="w-6 h-6"
                    />
                  </div>

                  {/* Facebook Tile */}
                  <div className="absolute bottom-16 -right-2 animate-float-slow">
                    <PlatformAppTile
                      platform="facebook"
                      className="w-14 h-14 rounded-2xl shadow-md"
                      iconClassName="w-7 h-7"
                    />
                  </div>

                  {/* Pinterest Tile */}
                  <div className="absolute bottom-6 left-6 animate-float-alt">
                    <PlatformAppTile
                      platform="pinterest"
                      className="w-14 h-14 rounded-2xl shadow-md"
                      iconClassName="w-7 h-7"
                    />
                  </div>

                  {/* Snapchat Tile */}
                  <div className="absolute bottom-0 left-28 animate-float-slow">
                    <PlatformAppTile
                      platform="snapchat"
                      className="w-13 h-13 rounded-2xl shadow-md"
                      iconClassName="w-7 h-7"
                    />
                  </div>

                  {/* Orange Cloud Tile */}
                  <div className="absolute bottom-6 right-10 w-14 h-14 rounded-2xl bg-[#ff7700] text-white flex items-center justify-center shadow-md animate-float-alt">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: DOWNLOADER BOX (OVERLAPPING HERO) */}
            <div className="relative -mt-4 sm:-mt-8 z-30">
              <DownloaderForm />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: POPULAR PLATFORMS (7 CARDS)
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Popular Platforms
            </h2>
            <p className="text-base text-navy-muted">
              Pick your favorite app and start saving
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {popularPlatformsList.map((plat) => (
              <Link
                key={plat.slug}
                href={`/${plat.slug}`}
                className="bg-white p-5 rounded-3xl border border-slate-100 shadow-soft card-hover flex flex-col items-center text-center space-y-3 group"
              >
                {/* Platform Real Official Logo Tile */}
                <PlatformAppTile
                  platform={plat.slug}
                  className="w-14 h-14 rounded-2xl group-hover:scale-105 transition-transform"
                  iconClassName="w-7 h-7"
                />

                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-navy group-hover:text-brand-blue transition-colors">
                    {plat.name}
                  </h3>
                  <p className="text-[11px] text-navy-muted leading-tight line-clamp-2">
                    {plat.shortDesc}
                  </p>
                </div>

                <div className="pt-1 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: POWERFUL CONVERSION TOOLS (5 TINTED CARDS)
           ========================================================================= */}
        <section
          id="tools"
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Powerful Conversion Tools
            </h2>
            <p className="text-base text-navy-muted">
              Change your file into the format you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {conversionTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/${tool.slug}`}
                className={`p-6 rounded-3xl border ${tool.bgTint} ${tool.borderColor} shadow-soft card-hover flex flex-col justify-between space-y-4 group`}
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${tool.iconBg} ${tool.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    {tool.colorName === "pink" && <Music className="w-6 h-6" />}
                    {tool.colorName === "blue" && <Video className="w-6 h-6" />}
                    {tool.colorName === "purple" && (
                      <ImageIcon className="w-6 h-6" />
                    )}
                    {tool.colorName === "green" && (
                      <Sparkles className="w-6 h-6" />
                    )}
                    {tool.colorName === "orange" && (
                      <Minimize2 className="w-6 h-6" />
                    )}
                  </div>

                  <h3 className="font-bold text-base text-navy group-hover:text-brand-blue transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-navy-muted leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/80 text-navy-muted">
                    {tool.badge}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HOW IT WORKS (BLUE GRADIENT BAND WITH 3 STEP CARDS)
           ========================================================================= */}
        <section
          id="how-it-works"
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24"
        >
          <div className="bg-band-gradient rounded-3xl sm:rounded-4xl p-8 sm:p-14 text-white shadow-card">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How It Works
              </h2>
              <p className="text-base text-white/85">
                Download or convert any media in just 3 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-7 text-navy shadow-soft space-y-3 relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  1
                </div>
                <h3 className="font-bold text-lg text-navy">Paste the Link</h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  Copy the video or post link from your favorite app and paste
                  it in the box above.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-7 text-navy shadow-soft space-y-3 relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  2
                </div>
                <h3 className="font-bold text-lg text-navy">Choose Format</h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  Select the format and quality you like (e.g. 1080p Full HD
                  video or 320 kbps MP3 audio).
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-7 text-navy shadow-soft space-y-3 relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  3
                </div>
                <h3 className="font-bold text-lg text-navy">Download</h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  Click download and save the file directly to your phone,
                  tablet, or computer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: WHY CHOOSE DISPATCH
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & 4 Benefits */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
                  <span>WHY CHOOSE DISPATCH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                  A Complete Media Toolkit <br />
                  for Everyone
                </h2>
                <p className="text-base text-navy-muted leading-relaxed">
                  Fast, reliable and built for everyday use &mdash; we never
                  store your files or personal data.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefit 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy">
                      Lightning Fast
                    </h4>
                    <p className="text-xs text-navy-muted">
                      Get your files in seconds.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy">
                      High Quality
                    </h4>
                    <p className="text-xs text-navy-muted">
                      Up to 8K video, 320kbps audio.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy">
                      Works on All Devices
                    </h4>
                    <p className="text-xs text-navy-muted">
                      Windows, Mac, Android, iOS.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy">
                      Safe & Private
                    </h4>
                    <p className="text-xs text-navy-muted">
                      We never store your files.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 6-Second Interactive Showcase Video */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <ShowcaseVideo />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: STATS ROW (4 CARDS)
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  {stat.iconName === "users" && (
                    <Users className="w-6 h-6 text-emerald-600" />
                  )}
                  {stat.iconName === "globe" && (
                    <Globe className="w-6 h-6 text-indigo-600" />
                  )}
                  {stat.iconName === "sparkles" && (
                    <Sparkles className="w-6 h-6 text-brand-blue" />
                  )}
                  {stat.iconName === "shield" && (
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                  )}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-navy-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: SUPPORTED PLATFORMS ROW
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            ALL MAJOR SOCIAL PLATFORMS READY
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {popularSitesChips.map((site) => (
              <Link
                key={site.slug}
                href={`/${site.slug}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm font-semibold text-navy hover:border-brand-blue hover:text-brand-blue shadow-sm transition-all"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${site.dot}`} />
                <span>{site.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: FREQUENTLY ASKED QUESTIONS (ACCORDION + HELP CARD)
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-navy-muted">
              Quick answers in plain words.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 6 Accordions */}
            <div className="lg:col-span-8 space-y-3">
              {homeFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-soft transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-navy hover:text-brand-blue transition-colors"
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

            {/* Right: Help Center Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-100 p-8 shadow-card text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xl text-navy">
                Still have questions?
              </h3>
              <p className="text-sm text-navy-muted leading-relaxed">
                Check our simple guides or reach out to our team anytime.
              </p>
              <div className="pt-2">
                <Link
                  href="/help"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 transition-all"
                >
                  <span>Visit Help Center</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: GUIDES AND TIPS (4 BLOG CARDS)
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Guides & Tips
              </h2>
              <p className="text-base text-navy-muted mt-1">
                Learn how to save and convert like a pro.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:underline"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden card-hover flex flex-col group"
              >
                {article.imageUrl && (
                  <div className="h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-navy-muted">
                      <span className="font-bold text-brand-blue uppercase">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-base text-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-navy-muted line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FINAL CALL TO ACTION BAND
           ========================================================================= */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-band-gradient rounded-3xl sm:rounded-4xl p-8 sm:p-12 text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Start Downloading Now
              </h2>
              <p className="text-base text-white/85 max-w-xl">
                Fast, free and works on your favorite social platforms. No
                registration. No installation.
              </p>
            </div>

            <Link
              href="/#downloader"
              className="px-8 py-4 rounded-xl bg-white text-brand-blue font-extrabold text-base shadow-lg hover:bg-slate-50 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              <span>Try Dispatch Free</span>
              <ArrowRight className="w-4 h-4 text-brand-blue" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
