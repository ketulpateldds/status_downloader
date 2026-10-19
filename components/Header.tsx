"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Download, Layers } from "lucide-react";
import { PlatformAppTile } from "./PlatformIcon";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadersOpen, setDownloadersOpen] = useState(false);
  const [convertersOpen, setConvertersOpen] = useState(false);
  const pathname = usePathname();

  const downloadersRef = useRef<HTMLDivElement>(null);
  const convertersRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        downloadersRef.current &&
        !downloadersRef.current.contains(e.target as Node)
      ) {
        setDownloadersOpen(false);
      }
      if (
        convertersRef.current &&
        !convertersRef.current.contains(e.target as Node)
      ) {
        setConvertersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDownloadersOpen(false);
    setConvertersOpen(false);
  }, [pathname]);

  const platformLinks = [
    { name: "TikTok", slug: "tiktok", badge: "No Watermark" },
    {
      name: "Instagram",
      slug: "instagram",
      badge: "Reels & Stories",
    },
    { name: "YouTube", slug: "youtube", badge: "HD & 8K" },
    { name: "Twitter / X", slug: "twitter", badge: "HD & GIFs" },
    { name: "Facebook", slug: "facebook", badge: "Reels & Watch" },
    { name: "Pinterest", slug: "pinterest", badge: "Videos & Pins" },
    { name: "Spotify", slug: "spotify", badge: "320kbps MP3" },
    { name: "SoundCloud", slug: "soundcloud", badge: "HQ Audio" },
    { name: "CapCut", slug: "capcut", badge: "No Watermark" },
    { name: "Threads", slug: "threads", badge: "HD Media" },
  ];

  const converterLinks = [
    {
      name: "Video to MP3",
      slug: "video-to-mp3",
      desc: "Extract high quality 320 kbps audio",
    },
    {
      name: "Video to MP4",
      slug: "video-to-mp4",
      desc: "Convert videos to universal MP4 format",
    },
    {
      name: "Image Converter",
      slug: "image-converter",
      desc: "Convert JPG, PNG, and WebP images",
    },
    {
      name: "Audio Converter",
      slug: "audio-converter",
      desc: "Convert to MP3, WAV, and M4A",
    },
    {
      name: "Compress Video",
      slug: "compress-video",
      desc: "Reduce file size without quality loss",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo: Dispatch */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-navy">
            Dispatch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-brand-blue font-semibold"
                : "text-navy-muted hover:text-navy hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Downloaders Dropdown */}
          <div className="relative" ref={downloadersRef}>
            <button
              onClick={() => setDownloadersOpen(!downloadersOpen)}
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-navy-muted hover:text-navy hover:bg-slate-50 transition-colors"
              aria-expanded={downloadersOpen}
            >
              <span>Downloaders</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${downloadersOpen ? "rotate-180 text-brand-blue" : ""}`}
              />
            </button>

            {downloadersOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-hover border border-slate-100 p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Supported Platforms
                </div>
                {platformLinks.map((plat) => (
                  <Link
                    key={plat.slug}
                    href={`/${plat.slug}`}
                    onClick={() => setDownloadersOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-navy hover:bg-blue-50 hover:text-brand-blue transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <PlatformAppTile
                        platform={plat.slug}
                        className="w-6 h-6 rounded-lg"
                        iconClassName="w-3.5 h-3.5"
                      />
                      <span className="font-medium">{plat.name}</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-navy-muted group-hover:bg-blue-100 group-hover:text-brand-blue font-semibold">
                      {plat.badge}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Converters Dropdown */}
          <div className="relative" ref={convertersRef}>
            <button
              onClick={() => setConvertersOpen(!convertersOpen)}
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-navy-muted hover:text-navy hover:bg-slate-50 transition-colors"
              aria-expanded={convertersOpen}
            >
              <span>Converters</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${convertersOpen ? "rotate-180 text-brand-blue" : ""}`}
              />
            </button>

            {convertersOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-hover border border-slate-100 p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Format Conversion
                </div>
                {converterLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={() => setConvertersOpen(false)}
                    className="px-3 py-2 rounded-xl text-navy hover:bg-blue-50 hover:text-brand-blue transition-colors group"
                  >
                    <div className="font-medium text-sm text-navy group-hover:text-brand-blue">
                      {item.name}
                    </div>
                    <div className="text-xs text-navy-muted">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/batch"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/batch"
                ? "text-brand-blue font-semibold"
                : "text-navy-muted hover:text-navy hover:bg-slate-50"
            }`}
          >
            <Layers className="w-4 h-4 text-brand-blue" />
            <span>Batch Downloader</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200/60">
              Bulk
            </span>
          </Link>

          <Link
            href="/#tools"
            className="px-3.5 py-2 rounded-lg text-sm font-medium text-navy-muted hover:text-navy hover:bg-slate-50 transition-colors"
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname?.startsWith("/blog")
                ? "text-brand-blue font-semibold"
                : "text-navy-muted hover:text-navy hover:bg-slate-50"
            }`}
          >
            Guides
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-navy hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-navy hover:bg-slate-50"
          >
            Home
          </Link>

          <Link
            href="/batch"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-2 rounded-xl text-base font-semibold ${
              pathname === "/batch" ? "text-brand-blue" : "text-navy"
            } hover:bg-slate-50`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-blue" />
              <span>Batch Downloader</span>
            </div>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200/60">
              Bulk
            </span>
          </Link>

          <div className="pt-2">
            <div className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Supported Downloaders
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {platformLinks.map((plat) => (
                <Link
                  key={plat.slug}
                  href={`/${plat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-navy hover:bg-blue-50 hover:text-brand-blue"
                >
                  <PlatformAppTile
                    platform={plat.slug}
                    className="w-5 h-5 rounded-md"
                    iconClassName="w-3 h-3"
                  />
                  <span>{plat.name.replace(" Downloader", "")}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Conversion Tools
            </div>
            <div className="grid grid-cols-1 gap-1">
              {converterLinks.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium text-navy hover:bg-blue-50 hover:text-brand-blue"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-navy hover:text-brand-blue"
            >
              Guides & Tutorials
            </Link>
            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-navy hover:text-brand-blue"
            >
              Help Center
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
