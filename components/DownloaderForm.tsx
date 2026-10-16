'use client';

import React, { useState } from 'react';
import { fetchMediaDetails, detectPlatformFromUrl, MediaInfo, DownloadError } from '@/lib/api/downloader';
import { validateInputUrl } from '@/lib/validation/url';
import { MediaPreviewTicket } from './MediaPreviewTicket';
import { ArrowRight, Clipboard, X, AlertTriangle, ShieldCheck, Search } from 'lucide-react';

interface DownloaderFormProps {
  defaultPlatformSlug?: string;
  customPlaceholder?: string;
}

export function DownloaderForm({ defaultPlatformSlug, customPlaceholder }: DownloaderFormProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaResult, setMediaResult] = useState<MediaInfo | null>(null);
  const [errorState, setErrorState] = useState<string | null>(null);

  const detectedPlatform = detectPlatformFromUrl(url) || defaultPlatformSlug;

  const handlePasteClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        setUrl(text);
        setErrorState(null);
      }
    } catch {
      // Clipboard access denied in browser sandbox
    }
  };

  const handleClear = () => {
    setUrl('');
    setErrorState(null);
    setMediaResult(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(null);

    const validation = validateInputUrl(url);
    if (!validation.success) {
      setErrorState(validation.error || 'Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    try {
      const data = await fetchMediaDetails(url);
      setMediaResult(data);
    } catch (err: unknown) {
      const dErr = err as DownloadError;
      setErrorState(dErr.message || 'Unable to inspect this public stream. Please check link availability.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Downloader Input Box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="wire-border bg-paper p-2 sm:p-3 shadow-tactile flex flex-col sm:flex-row items-stretch gap-2 transition-all">
          <div className="relative flex-1 flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (errorState) setErrorState(null);
              }}
              placeholder={customPlaceholder || 'Paste public video, reel, story or photo URL...'}
              className="w-full bg-transparent px-3 py-3 text-sm sm:text-base font-sans text-ink placeholder:text-ink-faint focus:outline-none"
            />
            {url ? (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear input"
                className="p-1.5 text-ink-muted hover:text-ink mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePasteClipboard}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-ink-muted hover:text-ink bg-paper-2 border border-border mr-2"
              >
                <Clipboard className="w-3.5 h-3.5" />
                <span>PASTE</span>
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="wire-btn py-3 px-6 sm:px-8 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shrink-0"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                <span>INSPECTING...</span>
              </>
            ) : (
              <>
                <span>INSPECT STREAM</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Live Detection Indicator */}
        <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-ink-muted px-1">
          <div className="flex items-center gap-2">
            <span>DETECTED PLATFORM:</span>
            {detectedPlatform ? (
              <span className="font-semibold text-signal uppercase">
                &bull; {detectedPlatform}
              </span>
            ) : (
              <span className="text-ink-faint">AUTO-READY</span>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-ink-faint">
            <ShieldCheck className="w-3.5 h-3.5 text-signal" />
            <span>PUBLIC MEDIA ONLY</span>
          </div>
        </div>
      </form>

      {/* Error Banner */}
      {errorState && (
        <div className="mt-4 p-4 bg-paper-2 wire-border border-signal text-ink text-xs font-mono flex items-start gap-3 shadow-tactile-sm">
          <AlertTriangle className="w-5 h-5 text-signal shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-signal uppercase tracking-wider">
              INSPECTION ERROR
            </div>
            <div>{errorState}</div>
            <div className="text-[11px] text-ink-muted">
              Ensure the link belongs to an open, public profile and is not password or follow-restricted.
            </div>
          </div>
        </div>
      )}

      {/* Media Result Ticket */}
      {mediaResult && (
        <MediaPreviewTicket
          media={mediaResult}
          onReset={handleClear}
        />
      )}
    </div>
  );
}
