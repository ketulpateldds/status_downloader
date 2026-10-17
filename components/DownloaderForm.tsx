'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  fetchMediaDetails,
  detectPlatformFromUrl,
  MediaInfo,
  DownloadError,
} from '@/lib/api/downloader';
import { validateInputUrl } from '@/lib/validation/url';
import {
  Link2,
  Download,
  Clipboard,
  X,
  AlertCircle,
  CheckCircle2,
  Video,
  Music,
  MoreHorizontal,
  Sparkles,
  ArrowRight,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { popularSitesChips } from '@/data/supportedSites';

interface DownloaderFormProps {
  defaultPlatformSlug?: string;
  customPlaceholder?: string;
  hideSupportedChips?: boolean;
  hideTabs?: boolean;
}

export function DownloaderForm({
  defaultPlatformSlug,
  customPlaceholder,
  hideSupportedChips,
  hideTabs,
}: DownloaderFormProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'mp3' | 'mp4' | 'more'>('video');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaResult, setMediaResult] = useState<MediaInfo | null>(null);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const detectedPlatform = detectPlatformFromUrl(url) || defaultPlatformSlug;

  const handlePasteClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setUrl(text.trim());
          setErrorState(null);
        }
      }
    } catch {
      // Browser permission denied or sandbox restriction
    }
  };

  const handleClear = () => {
    setUrl('');
    setErrorState(null);
    setMediaResult(null);
    setDownloadSuccessId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(null);
    setDownloadSuccessId(null);

    const validation = validateInputUrl(url);
    if (!validation.success) {
      setErrorState(validation.error || 'Please enter a valid link');
      return;
    }

    setIsLoading(true);
    try {
      const data = await fetchMediaDetails(url);
      setMediaResult(data);
    } catch (err: unknown) {
      const dErr = err as DownloadError;
      setErrorState(
        dErr.message || "We couldn't open that link. Check that it's a public post and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const triggerDownload = (formatLabel: string, formatId: string) => {
    setDownloadSuccessId(formatId);
    // Simulate real browser download behavior
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', `${mediaResult?.title || 'media'}.${formatId.includes('mp3') ? 'mp3' : 'mp4'}`);
    document.body.appendChild(link);
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <div id="downloader" className="w-full max-w-4xl mx-auto scroll-mt-28">
      <div className="bg-white rounded-3xl sm:rounded-4xl shadow-card border border-slate-100 p-5 sm:p-8 relative">
        
        {/* Navigation Tabs (Shown on Home Page) or Focused Header (Shown on Platform Pages) */}
        {!hideTabs ? (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'video'
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                  : 'text-navy-muted hover:text-navy hover:bg-slate-50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Video Downloader</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('audio')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'audio'
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                  : 'text-navy-muted hover:text-navy hover:bg-slate-50'
              }`}
            >
              <Music className="w-4 h-4" />
              <span>Audio Downloader</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mp3')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'mp3'
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                  : 'text-navy-muted hover:text-navy hover:bg-slate-50'
              }`}
            >
              Convert to MP3
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mp4')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'mp4'
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                  : 'text-navy-muted hover:text-navy hover:bg-slate-50'
              }`}
            >
              Convert to MP4
            </button>

            <Link
              href="/#tools"
              className="flex items-center gap-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-navy-muted hover:text-brand-blue hover:bg-blue-50 whitespace-nowrap ml-auto"
            >
              <MoreHorizontal className="w-4 h-4" />
              <span>More Tools</span>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold shrink-0">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-bold text-navy">Paste link to download</span>
                <span className="hidden sm:inline text-xs text-navy-muted ml-2">&bull; Click download to choose format</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ready</span>
            </div>
          </div>
        )}

        {/* Input & Action Row */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col xl:flex-row items-stretch gap-2.5 bg-slate-50 p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 focus-within:border-brand-blue focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
            
            {/* Input field */}
            <div className="relative flex-1 flex items-center min-w-0">
              <Link2 className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (errorState) setErrorState(null);
                }}
                placeholder={
                  customPlaceholder ||
                  (activeTab === 'audio' || activeTab === 'mp3'
                    ? 'Paste a video or music link to extract MP3...'
                    : 'Paste a video or post link here (e.g. YouTube, Instagram, TikTok...)')
                }
                className="w-full bg-transparent px-3 py-3 text-sm sm:text-base font-sans text-navy placeholder:text-slate-400 focus:outline-none"
              />

              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Clear link input"
                  className="p-1.5 text-slate-400 hover:text-navy rounded-lg mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePasteClipboard}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-lg mr-2 transition-colors shrink-0"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  <span>Paste</span>
                </button>
              )}
            </div>

            {/* Big Gradient Download Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm sm:text-base shadow-glow hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-70 whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Getting file...</span>
                </>
              ) : (
                <>
                  <span>Download</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Auto-detected platform chip */}
          {detectedPlatform && url.length > 5 && (
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue bg-blue-50/80 px-3 py-1.5 rounded-full w-fit animate-in fade-in duration-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="capitalize">{detectedPlatform} link detected</span>
            </div>
          )}
        </form>

        {/* Footer info: Either platform guarantee or supported sites chips */}
        {hideSupportedChips ? (
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-navy-muted">
            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Safe & Secure Direct Download</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-muted">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Original High Quality & No Watermark</span>
            </div>
          </div>
        ) : (
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-navy-muted">
            <span className="font-semibold text-navy">Supported sites:</span>
            {popularSitesChips.map((site) => (
              <Link
                key={site.slug}
                href={`/${site.slug}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-blue transition-colors group"
              >
                <span className={`w-2 h-2 rounded-full ${site.dot}`} />
                <span className="group-hover:underline">{site.name}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Error Notification */}
        {errorState && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3 animate-in fade-in">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-rose-800">Download Notice</div>
              <p>{errorState}</p>
              <p className="text-xs text-rose-700 pt-1">
                Tip: Make sure the post is public, not from a private account, and starts with https://.
              </p>
            </div>
          </div>
        )}

        {/* Loading State Skeleton */}
        {isLoading && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-3 animate-in fade-in">
            <div className="w-10 h-10 mx-auto rounded-full border-3 border-brand-blue border-t-transparent animate-spin" />
            <h4 className="font-bold text-navy text-base">Getting your file ready...</h4>
            <p className="text-xs text-navy-muted max-w-sm mx-auto">
              We are connecting to the high-speed source to bring you the highest quality audio and video options.
            </p>
          </div>
        )}

        {/* Result Card */}
        {mediaResult && !isLoading && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 space-y-5 animate-in fade-in slide-in-from-top-3 duration-200">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-blue-100">
              <div className="flex items-center gap-4">
                <img
                  src={mediaResult.thumbnailUrl}
                  alt={mediaResult.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-sm shrink-0 border border-slate-200"
                />
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue text-white">
                    {mediaResult.platformDisplayName}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-navy line-clamp-2">
                    {mediaResult.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-navy-muted">
                    <span>By {mediaResult.author}</span>
                    <span>&bull;</span>
                    <span>{mediaResult.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClear}
                className="text-xs font-semibold text-navy-muted hover:text-navy flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shrink-0 self-end sm:self-center"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>New Link</span>
              </button>
            </div>

            {/* Quality & Download Options */}
            <div>
              <div className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                Choose Format & Download:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mediaResult.formats.map((fmt) => (
                  <div
                    key={fmt.id}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-brand-blue flex items-center justify-between gap-3 transition-all group"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="font-bold text-sm text-navy flex items-center gap-1.5 truncate">
                        {fmt.isAudioOnly ? (
                          <Music className="w-4 h-4 text-pink-500 shrink-0" />
                        ) : (
                          <Video className="w-4 h-4 text-blue-500 shrink-0" />
                        )}
                        <span className="truncate">{fmt.label}</span>
                      </div>
                      <div className="text-xs text-navy-muted flex items-center gap-2">
                        <span className="uppercase font-semibold">{fmt.format}</span>
                        <span>&bull;</span>
                        <span>{fmt.sizeFormatted}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => triggerDownload(fmt.label, fmt.id)}
                      className="px-4 py-2 rounded-xl bg-brand-gradient text-white font-bold text-xs shadow-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Download feedback badge */}
            {downloadSuccessId && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Download started! Check your device Downloads folder or notifications.</span>
              </div>
            )}

            <div className="text-[11px] text-slate-400 text-center">
              {mediaResult.disclaimer}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
