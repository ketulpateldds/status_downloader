"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Apple,
  Smartphone,
  Laptop,
  ChevronDown,
  CheckCircle2,
  Film,
  Music,
  Layers,
  ShieldCheck,
  Zap,
  Sparkles,
  Info,
  FolderArchive,
  Download,
  ArrowRight,
  ExternalLink,
  SlidersHorizontal,
  Check,
} from "lucide-react";
import { PlatformAppTile } from "./PlatformIcon";
import { popularSitesChips } from "@/data/supportedSites";

export function BatchGuideSection() {
  const [deviceTab, setDeviceTab] = useState<"iphone" | "android" | "desktop">(
    "iphone"
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const batchFaqs = [
    {
      question: "How many video or audio links can I paste at once?",
      answer:
        "You can paste as many links as you need! We recommend batches of 5 to 20 links at a time for the fastest fetch speeds and smooth browser performance. Each link is inspected and fetched in parallel.",
    },
    {
      question: "Will downloaded TikTok and Instagram videos have watermarks?",
      answer:
        "No. Our batch extractor retrieves the direct raw CDN stream whenever supported, giving you clean, watermark-free MP4 videos in crisp 1080p Full HD resolution.",
    },
    {
      question: "Can I mix links from different platforms in the same batch?",
      answer:
        "Yes, absolutely! You can combine YouTube Shorts, TikTok clips, Instagram Reels, Spotify tracks, and Pinterest pins in the very same batch list. Our system automatically detects each platform and applies the correct extraction engine.",
    },
    {
      question: "Where do my batch downloaded files get saved?",
      answer:
        "On iPhone/iPad, downloads save to Safari's Downloads folder inside the Files app, from where you can save them to Photos with one tap. On Android and PC/Mac, files save straight to your device's default Downloads folder.",
    },
    {
      question: "Is there any software, plugin, or registration required?",
      answer:
        "No software installation, browser extensions, or account sign-ups are required. The entire process runs 100% in your web browser securely and privately.",
    },
    {
      question: "Can I download audio-only (MP3) files in bulk?",
      answer:
        "Yes! You can use the 'Audio Only' filter toggle in the Batch Studio to isolate MP3 audio streams for Spotify, SoundCloud, or YouTube, or pick your desired format for each item in the results list.",
    },
  ];

  const deviceInstructions = {
    iphone: [
      {
        step: "1",
        title: "Copy Share URLs",
        desc: "Open TikTok, Instagram, YouTube, or Spotify, tap the Share icon on each item, and choose 'Copy Link'.",
      },
      {
        step: "2",
        title: "Paste in Safari & Fetch",
        desc: "Open Safari, paste all URLs (one per line) into the Dispatch Batch Studio above, and tap 'Fetch All Media'.",
      },
      {
        step: "3",
        title: "Download & Save to Photos",
        desc: "Tap Download on any ready item. Safari saves the file to Files > Downloads. Open the downloaded file, tap Share, and select 'Save Video' or 'Save Image' to store it directly in your Camera Roll.",
      },
    ],
    android: [
      {
        step: "1",
        title: "Copy Media Links",
        desc: "In any supported app, tap Share > 'Copy Link' for the videos or audio tracks you wish to save.",
      },
      {
        step: "2",
        title: "Paste in Chrome & Process",
        desc: "In Chrome, Firefox, or Samsung Internet, paste your links into the batch queue and start processing.",
      },
      {
        step: "3",
        title: "Direct Gallery Access",
        desc: "Tap Download on your items. Files download directly to your internal 'Download' folder and instantly appear in your Google Photos or device Gallery app.",
      },
    ],
    desktop: [
      {
        step: "1",
        title: "Copy Browser URLs",
        desc: "Copy public URLs directly from browser address bars or bookmark lists on Windows, macOS, or Linux.",
      },
      {
        step: "2",
        title: "Batch Inspect",
        desc: "Paste all URLs simultaneously into Dispatch. The parallel inspection engine parses metadata and resolutions in seconds.",
      },
      {
        step: "3",
        title: "Save at Original Quality",
        desc: "Click Download on each card or copy direct stream URLs. Media is saved straight to your system Downloads directory with zero quality loss.",
      },
    ],
  };

  const whatYouCanSave = [
    {
      title: "Watermark-Free HD Videos",
      desc: "Bulk download clean MP4 videos from TikTok, Instagram, and YouTube in 1080p, 720p, or 4K with no overlays.",
      badge: "No Watermark",
      icon: Film,
      color: "bg-blue-600",
    },
    {
      title: "High-Fidelity MP3 Audio",
      desc: "Extract crystal-clear audio tracks up to 320kbps from Spotify, SoundCloud, and YouTube without re-encoding.",
      badge: "320kbps MP3",
      icon: Music,
      color: "bg-emerald-600",
    },
    {
      title: "Shorts, Reels & Stories",
      desc: "Save trending short-form vertical videos with high frame rates, vibrant colors, and full audio sync.",
      badge: "Full Audio Sync",
      icon: Zap,
      color: "bg-indigo-600",
    },
    {
      title: "Visual Pins & Carousels",
      desc: "Archive full-resolution image sets, Pinterest pins, and media attachments from Twitter / X.",
      badge: "Lossless Quality",
      icon: Sparkles,
      color: "bg-rose-600",
    },
  ];

  const qualityMatrix = [
    {
      format: "MP4 Video",
      quality: "1080p Full HD / 4K",
      resolution: "1920×1080 / 3840×2160",
      recommended: "Crisp viewing on high-res monitors, TV screens, and editing projects",
    },
    {
      format: "MP4 Video",
      quality: "720p HD (Fast)",
      resolution: "1280×720",
      recommended: "Lightweight file size, rapid downloads, and messaging app shares",
    },
    {
      format: "MP3 Audio",
      quality: "320kbps / 128kbps",
      resolution: "Audio Stream",
      recommended: "High-quality music, background audio, podcasts, and sound bites",
    },
    {
      format: "JPG / PNG",
      quality: "Original HD",
      resolution: "Source Native",
      recommended: "Pinterest pins, carousel slide photos, and album cover artwork",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pt-12 sm:pt-16">
      {/* 1. How to Download in 3 Steps */}
      <section className="bg-band-gradient rounded-3xl sm:rounded-4xl p-8 sm:p-12 text-white shadow-card">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            How to Batch Download in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Archive multiple videos, songs, and reels at once without installing any software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-navy shadow-soft space-y-3 relative">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
              1
            </div>
            <h3 className="font-bold text-lg text-navy">Collect & Copy Links</h3>
            <p className="text-sm text-navy-muted leading-relaxed">
              Find the videos, reels, pins, or music tracks you want to save. Tap the <strong>Share</strong> button and copy their public links.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 text-navy shadow-soft space-y-3 relative">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
              2
            </div>
            <h3 className="font-bold text-lg text-navy">Paste One URL Per Line</h3>
            <p className="text-sm text-navy-muted leading-relaxed">
              Paste all links into the Batch Studio input area above. You can mix links from TikTok, YouTube, Instagram, and Spotify together.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 text-navy shadow-soft space-y-3 relative">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
              3
            </div>
            <h3 className="font-bold text-lg text-navy">Fetch & Download All</h3>
            <p className="text-sm text-navy-muted leading-relaxed">
              Click <strong>&ldquo;Fetch All Media&rdquo;</strong>. Inspect results, choose preferred resolutions, and download each file or copy direct stream URLs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What You Can Save in Bulk */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            What You Can Save in Batch
          </h2>
          <p className="text-sm sm:text-base text-navy-muted">
            All media is preserved in high fidelity, watermark-free, and ready for offline enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatYouCanSave.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm ${item.color}`}
                  >
                    <IconComp className="w-6 h-6" />
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
            );
          })}
        </div>
      </section>

      {/* 3. Works on Every Device (Device Support Tabs) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Works on Every Device
          </h2>
          <p className="text-sm sm:text-base text-navy-muted">
            Select your platform to see exact file-saving locations and quick tips.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-card space-y-6">
          {/* Device Tabs */}
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
          <div className="max-w-2xl mx-auto space-y-3 pt-2">
            {deviceInstructions[deviceTab].map((instruction, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-navy"
              >
                <div className="w-7 h-7 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {instruction.step}
                </div>
                <div className="space-y-0.5">
                  <div className="font-bold text-navy">{instruction.title}</div>
                  <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                    {instruction.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Format & Quality Specifications Table */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Quality & Format Specifications
          </h2>
          <p className="text-sm sm:text-base text-navy-muted">
            Direct streams matched to the highest fidelity available from origin servers.
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
                {qualityMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-navy">{row.format}</td>
                    <td className="px-6 py-4 text-navy font-semibold">{row.quality}</td>
                    <td className="px-6 py-4 text-navy-muted">{row.resolution}</td>
                    <td className="px-6 py-4 text-xs text-navy-muted">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Pro Tips for Faster Downloading */}
      <section className="bg-blue-50/60 rounded-3xl border border-blue-100 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 font-bold text-navy text-lg">
          <Info className="w-5 h-5 text-brand-blue" />
          <span>Pro Tips for Effortless Batch Downloading</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-blue-100 space-y-1.5">
            <h4 className="font-bold text-sm text-navy">One Link Per Line</h4>
            <p className="text-xs text-navy-muted leading-relaxed">
              Paste each URL on its own line or separate them with commas or spaces. The parser automatically detects valid URLs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-100 space-y-1.5">
            <h4 className="font-bold text-sm text-navy">Public Profiles Only</h4>
            <p className="text-xs text-navy-muted leading-relaxed">
              Make sure media is from public accounts, videos, and playlists so our servers can fetch the high-speed CDN stream.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-100 space-y-1.5">
            <h4 className="font-bold text-sm text-navy">Optimal Batch Sizes</h4>
            <p className="text-xs text-navy-muted leading-relaxed">
              Batches of 10 to 20 links balance lightning-fast response times with clean memory management on mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-navy-muted">
              Everything you need to know about the bulk downloading studio.
            </p>
          </div>

          <div className="space-y-3">
            {batchFaqs.map((faq, idx) => {
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

      {/* 7. Supported Platforms Launcher */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Supported Media Platforms
          </h2>
          <p className="text-sm sm:text-base text-navy-muted">
            Need to download single items or browse dedicated tools? Explore our dedicated downloaders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {popularSitesChips.map((chip) => (
            <Link
              key={chip.slug}
              href={`/${chip.slug}`}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-card hover:border-blue-200 transition-all group"
            >
              <PlatformAppTile
                platform={chip.slug}
                className="w-8 h-8 rounded-xl shrink-0"
                iconClassName="w-4 h-4"
              />
              <div className="min-w-0">
                <div className="text-xs font-bold text-navy truncate group-hover:text-brand-blue transition-colors">
                  {chip.name}
                </div>
                <div className="text-[10px] text-navy-muted">Downloader</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
