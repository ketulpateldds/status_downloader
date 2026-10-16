'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { platformList } from '@/content/platforms';
import { Menu, X, Sun, Moon, ArrowUpRight, Radio } from 'lucide-react';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isDarkStored = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-border transition-colors">
      {/* Top Ticker Status Bar */}
      <div className="bg-paper-2 border-b border-border-subtle text-[11px] font-mono py-1 px-4 tracking-wider flex items-center justify-between text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span>WIRE DESK: ACTIVE</span>
          <span className="hidden sm:inline text-border-strong">/</span>
          <span className="hidden sm:inline">PUBLIC STREAMS ONLY</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline">ENCODING: H.264 · MP4 · 320KBPS MP3</span>
          <span className="text-signal font-semibold">ZERO LOGS · NO COOKIES</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-7 h-7 bg-ink text-paper flex items-center justify-center font-serif font-bold text-lg group-hover:bg-signal transition-colors">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-ink group-hover:text-signal transition-colors">
                DISPATCH
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted -mt-1">
                Public Media Utility
              </span>
            </div>
          </Link>

          {/* Quick Platform Chips (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 pl-4 border-l border-border">
            {platformList.slice(0, 6).map((plat) => {
              const active = pathname === '/' + plat.slug;
              return (
                <Link
                  key={plat.slug}
                  href={'/' + plat.slug}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    active
                      ? 'bg-ink text-paper font-semibold'
                      : 'text-ink-muted hover:text-ink hover:bg-paper-hover'
                  }`}
                >
                  {plat.name.split(' ')[0]}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/blog"
            className="hidden sm:inline-flex text-xs font-mono font-medium text-ink-muted hover:text-ink px-2.5 py-1"
          >
            DISPATCHES (BLOG)
          </Link>

          <Link
            href="/dmca"
            className="hidden sm:inline-flex text-xs font-mono text-ink-faint hover:text-ink px-2 py-1"
          >
            DMCA
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 border border-border text-ink hover:border-ink rounded-none bg-paper transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-signal" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation drawer"
            className="lg:hidden p-2 border border-border text-ink hover:border-ink rounded-none bg-paper"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper-2 border-b border-border px-4 py-6 space-y-4 font-mono text-sm">
          <div className="text-xs uppercase text-ink-faint font-semibold tracking-wider">
            All Public Platform Tools
          </div>
          <div className="grid grid-cols-2 gap-2">
            {platformList.map((plat) => (
              <Link
                key={plat.slug}
                href={'/' + plat.slug}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 border border-border bg-paper hover:border-ink text-xs flex items-center justify-between"
              >
                <span>{plat.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-2 text-xs">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink-muted hover:text-ink"
            >
              Archival Dispatches & Codec Guides (Blog)
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink-muted hover:text-ink"
            >
              About Dispatch Utility & Architecture
            </Link>
            <Link
              href="/dmca"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink-muted hover:text-ink"
            >
              DMCA Content Takedown Notice
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink-muted hover:text-ink"
            >
              Technical Contact Desk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
