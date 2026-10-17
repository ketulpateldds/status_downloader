'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { platformList } from '@/content/platforms';
import { Menu, X, Sun, Moon, ArrowUpRight, Palette, Check } from 'lucide-react';

interface ThemeVariant {
  id: string;
  name: string;
  tagline: string;
  swatchColor: string;
}

const THEME_VARIANTS: ThemeVariant[] = [
  {
    id: 'newsprint',
    name: 'Newsprint Wire',
    tagline: 'Tactile cream, carbon ink & signal orange (Default)',
    swatchColor: '#f97316',
  },
  {
    id: 'cobalt',
    name: 'Modern Minimal',
    tagline: 'Deep obsidian & electric cobalt (Linear / Raycast style)',
    swatchColor: '#2563eb',
  },
  {
    id: 'brutal',
    name: 'Neo-Brutalist',
    tagline: 'High-contrast black & vibrant highlighter yellow',
    swatchColor: '#facc15',
  },
  {
    id: 'bloom',
    name: 'Atmospheric Studio',
    tagline: 'Titanium velvet & luminous warm amber gold',
    swatchColor: '#d97706',
  },
  {
    id: 'atelier',
    name: 'Refined Editorial',
    tagline: 'Parchment stone, classical serif & forest green',
    swatchColor: '#166534',
  },
];

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentVariant, setCurrentVariant] = useState('newsprint');
  const [variantDropdownOpen, setVariantDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Theme (Dark/Light)
    const isDarkStored =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 2. Initialize Variant
    const storedVariant = localStorage.getItem('dispatch_theme_variant') || 'newsprint';
    setCurrentVariant(storedVariant);
    document.documentElement.setAttribute('data-variant', storedVariant);

    // 3. Click outside listener for dropdown
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVariantDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const handleSelectVariant = (variantId: string) => {
    setCurrentVariant(variantId);
    localStorage.setItem('dispatch_theme_variant', variantId);
    document.documentElement.setAttribute('data-variant', variantId);
    setVariantDropdownOpen(false);
  };

  const activeVariantObj = THEME_VARIANTS.find((v) => v.id === currentVariant) || THEME_VARIANTS[0];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-border transition-colors">

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
            className="hidden md:inline-flex text-xs font-mono font-medium text-ink-muted hover:text-ink px-2.5 py-1"
          >
            BLOG
          </Link>

          {/* ============================================================= */}
          {/* THEME VARIANT DROPDOWN MENU (FOR CLIENT REVIEW)               */}
          {/* ============================================================= */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setVariantDropdownOpen(!variantDropdownOpen)}
              className="px-2.5 py-1.5 border border-border text-ink hover:border-ink rounded-none bg-paper text-xs font-mono flex items-center gap-1.5 transition-colors shadow-tactile-sm"
              aria-label="Select design aesthetic variant"
            >
              <Palette className="w-3.5 h-3.5 text-signal" />
              <span className="hidden sm:inline">Theme:</span>
              <span className="font-semibold text-signal">{activeVariantObj.name}</span>
              <span className="text-[10px] text-ink-muted">▾</span>
            </button>

            {/* Dropdown Card */}
            {variantDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-72 sm:w-80 bg-paper wire-border shadow-tactile p-2 z-50 font-sans space-y-1">
                <div className="px-2 py-1.5 border-b border-border-subtle font-mono text-[10px] uppercase text-ink-faint flex items-center justify-between">
                  <span>Hallmark Design Variants</span>
                  <span className="text-signal font-bold">5 Available</span>
                </div>

                <div className="pt-1 space-y-1">
                  {THEME_VARIANTS.map((variant) => {
                    const isSelected = variant.id === currentVariant;
                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => handleSelectVariant(variant.id)}
                        className={`w-full text-left p-2.5 wire-border text-xs flex items-start justify-between gap-3 transition-all ${
                          isSelected
                            ? 'bg-ink text-paper border-ink'
                            : 'bg-paper text-ink hover:bg-paper-2 hover:border-ink'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block shrink-0 border border-black/20"
                              style={{ backgroundColor: variant.swatchColor }}
                            />
                            <span className="font-serif font-bold text-sm leading-none">
                              {variant.name}
                            </span>
                          </div>
                          <p className={`text-[11px] leading-snug ${isSelected ? 'text-paper/70' : 'text-ink-muted'}`}>
                            {variant.tagline}
                          </p>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="px-2 pt-2 pb-1 border-t border-border-subtle text-[10px] font-mono text-ink-faint leading-tight">
                  Live client switcher · Instant token hot-reload
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme mode"
            className="p-2 border border-border text-ink hover:border-ink rounded-none bg-paper transition-colors shadow-tactile-sm"
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
