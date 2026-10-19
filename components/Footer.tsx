import React from "react";
import Link from "next/link";
import { Download, ShieldCheck } from "lucide-react";

export function Footer() {
  const downloaders = [
    { name: "TikTok Downloader", href: "/tiktok" },
    { name: "Instagram Downloader", href: "/instagram" },
    { name: "YouTube Downloader", href: "/youtube" },
    { name: "Twitter / X Downloader", href: "/twitter" },
    { name: "Facebook Downloader", href: "/facebook" },
    { name: "Pinterest Downloader", href: "/pinterest" },
    { name: "Spotify Downloader", href: "/spotify" },
    { name: "SoundCloud Downloader", href: "/soundcloud" },
    { name: "CapCut Downloader", href: "/capcut" },
    { name: "Threads Downloader", href: "/threads" },
    { name: "Batch Downloader (Bulk)", href: "/batch" },
  ];

  const converters = [
    { name: "Video to MP3", href: "/video-to-mp3" },
    { name: "Video to MP4", href: "/video-to-mp4" },
    { name: "Image Converter", href: "/image-converter" },
    { name: "Audio Converter", href: "/audio-converter" },
    { name: "Compress Video", href: "/compress-video" },
  ];

  const resources = [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Guides & Blog", href: "/blog" },
    { name: "Help Center & FAQ", href: "/help" },
  ];

  const legal = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "DMCA & Takedown Policy", href: "/dmca" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Support", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 py-10 text-sm text-navy-muted">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-sm">
                <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-navy">
                Dispatch
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-navy-muted">
              Your friendly online media downloader and converter. Save public
              videos, music, and photos in seconds with zero fuss.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free · No Ads · Private</span>
            </div>
          </div>

          {/* Downloaders Col */}
          <div>
            <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
              Downloaders
            </h3>
            <ul className="space-y-2.5">
              {downloaders.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors text-navy-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Converters Col */}
          <div>
            <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
              Converters
            </h3>
            <ul className="space-y-2.5">
              {converters.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors text-navy-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors text-navy-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
              Legal & Safety
            </h3>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors text-navy-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-400">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Not affiliated with YouTube, Instagram,
            TikTok, Facebook, X, Pinterest, Spotify, SoundCloud, CapCut, or Threads. Dispatch does not host
            or store any videos on its servers. All media is downloaded directly
            from third-party content delivery networks. Users are solely
            responsible for ensuring they have the legal right or permission to
            download and store any content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-slate-500 font-medium">
            <div>&copy; 2026 Dispatch. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-navy">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-navy">
                Terms
              </Link>
              <Link href="/dmca" className="hover:text-navy">
                DMCA
              </Link>
              <Link href="/contact" className="hover:text-navy">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
