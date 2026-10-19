'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  fetchMediaDetails,
  detectPlatformFromUrl,
  MediaInfo,
  FormatOption,
} from '@/lib/api/downloader';
import {
  Layers,
  Sparkles,
  Download,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Copy,
  Trash2,
  ExternalLink,
  Music,
  Video,
  ShieldCheck,
  Zap,
  Loader2,
  FolderArchive,
  ArrowRight,
  Link2,
} from 'lucide-react';
import { PlatformAppTile } from './PlatformIcon';
import { popularSitesChips } from '@/data/supportedSites';

export interface QueueItem {
  id: string;
  url: string;
  platform: string;
  status: 'idle' | 'fetching' | 'ready' | 'error';
  mediaInfo?: MediaInfo;
  error?: string;
}

const SAMPLE_POSTS = [
  'https://www.youtube.com/watch?v=iraezTzB938',
  'https://www.tiktok.com/@scout2015/video/6718335390845095173',
  'https://www.instagram.com/reel/C8qL8fGxA2z/',
  'https://twitter.com/SpaceX/status/1672322971253243905',
  'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
];

export function BatchDownloader() {
  const [inputText, setInputText] = useState('');
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formatMode, setFormatMode] = useState<'all' | 'video' | 'audio'>('all');
  const [copiedAll, setCopiedAll] = useState(false);

  // Parse valid URLs from textarea
  const extractedUrls = useMemo(() => {
    return inputText
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => /^https?:\/\//i.test(l));
  }, [inputText]);

  // Load sample posts
  const handleLoadSamples = () => {
    setInputText(SAMPLE_POSTS.join('\n'));
  };

  // Add parsed URLs into queue
  const handleAddToQueue = () => {
    if (extractedUrls.length === 0) return;

    const newItems: QueueItem[] = extractedUrls.map((url, idx) => ({
      id: `${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
      url,
      platform: detectPlatformFromUrl(url) || 'generic',
      status: 'idle',
    }));

    setQueue((prev) => {
      const existingUrls = new Set(prev.map((i) => i.url));
      const filtered = newItems.filter((item) => !existingUrls.has(item.url));
      return [...prev, ...filtered];
    });

    setInputText('');
  };

  // Trigger batch extraction
  const handleAnalyzeAll = async (itemsToProcess?: QueueItem[]) => {
    let targetItems: QueueItem[] = [];

    if (itemsToProcess && itemsToProcess.length > 0) {
      targetItems = itemsToProcess;
    } else if (extractedUrls.length > 0) {
      const newItems: QueueItem[] = extractedUrls.map((url, idx) => ({
        id: `${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
        url,
        platform: detectPlatformFromUrl(url) || 'generic',
        status: 'idle',
      }));

      setQueue((prev) => {
        const existingUrls = new Set(prev.map((i) => i.url));
        const filtered = newItems.filter((item) => !existingUrls.has(item.url));
        return [...prev, ...filtered];
      });

      targetItems = newItems;
      setInputText('');
    } else {
      targetItems = queue.filter((i) => i.status === 'idle' || i.status === 'error');
    }

    if (targetItems.length === 0) return;

    setIsProcessing(true);

    const processQueueItem = async (item: QueueItem) => {
      setQueue((prev) =>
        prev.map((q) => (q.id === item.id ? { ...q, status: 'fetching', error: undefined } : q))
      );

      try {
        const media = await fetchMediaDetails(item.url, item.platform);
        setQueue((prev) =>
          prev.map((q) =>
            q.id === item.id
              ? {
                  ...q,
                  status: 'ready',
                  mediaInfo: media,
                }
              : q
          )
        );
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Couldn't extract media from link";
        setQueue((prev) =>
          prev.map((q) =>
            q.id === item.id
              ? {
                  ...q,
                  status: 'error',
                  error: message,
                }
              : q
          )
        );
      }
    };

    // Parallel processing in chunks of 2
    for (let i = 0; i < targetItems.length; i += 2) {
      const chunk = targetItems.slice(i, i + 2);
      await Promise.all(chunk.map(processQueueItem));
    }

    setIsProcessing(false);
  };

  // Direct download file trigger
  const handleDownloadFile = (mediaTitle: string, fmt: FormatOption) => {
    const rawTitle = mediaTitle || 'media';
    const cleanTitle = rawTitle
      .replace(/[\/\\?%*:|"<>#]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .substring(0, 80);
    const filename = `${cleanTitle || 'media'}.${fmt.format || 'mp4'}`;

    const downloadEndpoint = `/api/download/file?url=${encodeURIComponent(fmt.url)}&filename=${encodeURIComponent(filename)}`;

    const link = document.createElement('a');
    link.href = downloadEndpoint;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Batch download all ready items
  const handleDownloadAllReady = () => {
    const readyItems = queue.filter((i) => i.status === 'ready' && i.mediaInfo);

    readyItems.forEach((item, idx) => {
      if (!item.mediaInfo) return;

      let targetFmt = item.mediaInfo.formats[0];
      if (formatMode === 'audio') {
        const audioFmt = item.mediaInfo.formats.find((f) => f.isAudioOnly || f.format === 'mp3');
        if (audioFmt) targetFmt = audioFmt;
      } else if (formatMode === 'video') {
        const videoFmt = item.mediaInfo.formats.find((f) => !f.isAudioOnly && f.format !== 'mp3');
        if (videoFmt) targetFmt = videoFmt;
      }

      if (targetFmt) {
        setTimeout(() => {
          handleDownloadFile(item.mediaInfo?.title || 'media', targetFmt);
        }, idx * 400);
      }
    });
  };

  // Copy all direct links
  const handleCopyAllLinks = () => {
    const readyLinks = queue
      .filter((i) => i.status === 'ready' && i.mediaInfo)
      .map((i) => {
        const fmt = i.mediaInfo?.formats[0];
        return `${i.mediaInfo?.title || 'Media'}: ${fmt?.url || i.url}`;
      })
      .join('\n');

    if (readyLinks && navigator.clipboard) {
      navigator.clipboard.writeText(readyLinks);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const totalCount = queue.length;
  const readyCount = queue.filter((i) => i.status === 'ready').length;
  const errorCount = queue.filter((i) => i.status === 'error').length;
  const progressPercent = totalCount > 0 ? Math.round(((readyCount + errorCount) / totalCount) * 100) : 0;

  return (
    <div className="space-y-10">
      {/* Page Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span>ALL-IN-ONE BULK ENGINE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
          Download Multiple Media in{' '}
          <span className="text-brand-gradient">One Batch</span>
        </h1>

        <p className="text-sm sm:text-base text-navy-muted max-w-2xl mx-auto leading-relaxed">
          Paste multiple links from YouTube, TikTok, Instagram, Twitter/X, and Spotify. Extract all videos, audio files, and photos simultaneously with direct high-speed downloads.
        </p>
      </div>

      {/* Main White Studio Card */}
      <div className="bg-white rounded-3xl sm:rounded-4xl shadow-card border border-slate-100 p-6 sm:p-9 relative">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold shadow-xs shrink-0">
              <Layers className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-navy flex items-center gap-2">
                <span>Batch Downloader & Archive Studio</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200/60">
                  Bulk
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-navy-muted">
                Paste multiple URLs below (one link per line) to process them all together.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLoadSamples}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-brand-blue border border-blue-200/60 text-xs sm:text-sm font-semibold transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span>Load 5 Sample Posts</span>
          </button>
        </div>

        {/* Textarea Input Section */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <textarea
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Paste multiple URLs here (one link per line)\nhttps://www.tiktok.com/@.../video/...\nhttps://www.instagram.com/reel/...\nhttps://www.youtube.com/watch?v=...\nhttps://twitter.com/.../status/...\nhttps://open.spotify.com/track/...`}
              className="w-full bg-slate-50 hover:bg-slate-50/80 focus:bg-white text-navy placeholder:text-slate-400 font-sans text-xs sm:text-sm p-4 sm:p-5 rounded-2xl border border-slate-200/90 focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-y leading-relaxed"
            />

            {inputText && (
              <button
                type="button"
                onClick={() => setInputText('')}
                className="absolute top-3 right-3 text-xs font-semibold text-slate-500 hover:text-navy px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-xs transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-navy-muted">
              <span className="font-semibold text-navy">Supports:</span>
              {popularSitesChips.map((site) => (
                <span key={site.slug} className="inline-flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${site.dot}`} />
                  <span>{site.name}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:self-end">
              <button
                type="button"
                onClick={handleAddToQueue}
                disabled={extractedUrls.length === 0}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy text-xs sm:text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>+ Add Links to Queue</span>
              </button>

              <button
                type="button"
                onClick={() => handleAnalyzeAll()}
                disabled={isProcessing || (extractedUrls.length === 0 && queue.length === 0)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-gradient text-white font-bold text-xs sm:text-sm shadow-glow hover:opacity-95 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Analyzing Queue...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white text-white" />
                    <span>
                      Analyze All Links ({extractedUrls.length > 0 ? extractedUrls.length : queue.length})
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Live Queue Container */}
        {queue.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
            {/* Queue Controls Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-navy">Extraction Queue</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white text-navy font-semibold border border-slate-200 shadow-xs">
                    {readyCount} / {totalCount} Ready
                  </span>
                  {errorCount > 0 && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                      {errorCount} Failed
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="w-48 sm:w-64 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Format mode selector & actions */}
              <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto justify-end">
                {/* Format Filter Pill */}
                <div className="inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 text-xs shadow-xs">
                  <button
                    type="button"
                    onClick={() => setFormatMode('all')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      formatMode === 'all' ? 'bg-brand-blue text-white' : 'text-navy-muted hover:text-navy'
                    }`}
                  >
                    All Formats
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormatMode('video')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      formatMode === 'video' ? 'bg-brand-blue text-white' : 'text-navy-muted hover:text-navy'
                    }`}
                  >
                    Video
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormatMode('audio')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      formatMode === 'audio' ? 'bg-brand-blue text-white' : 'text-navy-muted hover:text-navy'
                    }`}
                  >
                    Audio
                  </button>
                </div>

                {readyCount > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={handleDownloadAllReady}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-gradient text-white text-xs font-bold shadow-glow hover:opacity-95 active:scale-98 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download All ({readyCount})</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyAllLinks}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-navy text-xs font-semibold transition-all border border-slate-200 shadow-xs"
                    >
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{copiedAll ? 'Copied!' : 'Copy Links'}</span>
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setQueue([])}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Clear Queue"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Queue Item Cards */}
            <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
              {queue.map((item, index) => {
                const media = item.mediaInfo;

                let displayedFormats: FormatOption[] = media?.formats || [];
                if (formatMode === 'audio') {
                  const audioOnly = media?.formats.filter((f) => f.isAudioOnly || f.format === 'mp3');
                  if (audioOnly && audioOnly.length > 0) displayedFormats = audioOnly;
                } else if (formatMode === 'video') {
                  const videoOnly = media?.formats.filter((f) => !f.isAudioOnly && f.format !== 'mp3');
                  if (videoOnly && videoOnly.length > 0) displayedFormats = videoOnly;
                }

                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3.5 hover:border-brand-blue hover:shadow-sm transition-all"
                  >
                    {/* Left: Thumbnail & Info */}
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden shrink-0 relative flex items-center justify-center border border-slate-200">
                        {media?.thumbnailUrl ? (
                          <img
                            src={media.thumbnailUrl}
                            alt={media.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <PlatformAppTile platform={item.platform} className="w-8 h-8 rounded-lg" />
                        )}
                        <span className="absolute bottom-1 right-1 text-[10px] font-bold px-1 rounded bg-black/70 text-white leading-tight">
                          #{index + 1}
                        </span>
                      </div>

                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="uppercase text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-navy border border-slate-200">
                            {item.platform}
                          </span>

                          {item.status === 'fetching' && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-brand-blue font-semibold">
                              <Loader2 className="w-3 h-3 animate-spin" />
                              <span>Extracting...</span>
                            </span>
                          )}

                          {item.status === 'ready' && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Ready</span>
                            </span>
                          )}

                          {item.status === 'error' && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-rose-600 font-semibold">
                              <AlertCircle className="w-3 h-3" />
                              <span>Failed</span>
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-navy truncate max-w-md">
                          {media?.title || item.url}
                        </h4>

                        {media?.author && (
                          <div className="text-[11px] text-navy-muted">By {media.author}</div>
                        )}

                        {item.error && (
                          <div className="text-[11px] text-rose-600">{item.error}</div>
                        )}
                      </div>
                    </div>

                    {/* Right: Actions / Download Buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      {item.status === 'ready' && media && (
                        <div className="flex flex-wrap items-center gap-2">
                          {displayedFormats.map((fmt) => (
                            <button
                              key={fmt.id}
                              type="button"
                              onClick={() => handleDownloadFile(media.title, fmt)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-gradient text-white text-xs font-bold shadow-xs hover:opacity-95 active:scale-95 transition-all"
                            >
                              {fmt.isAudioOnly ? (
                                <Music className="w-3 h-3 text-white" />
                              ) : (
                                <Video className="w-3 h-3 text-white" />
                              )}
                              <span>{fmt.format.toUpperCase()}</span>
                              <span className="opacity-80 font-normal">({fmt.quality})</span>
                              <Download className="w-3 h-3 ml-0.5" />
                            </button>
                          ))}
                        </div>
                      )}

                      {item.status === 'error' && (
                        <button
                          type="button"
                          onClick={() => handleAnalyzeAll([item])}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy text-xs font-semibold transition-all border border-slate-200"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Retry</span>
                        </button>
                      )}

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-navy rounded-lg hover:bg-slate-100 transition-colors"
                        title="View original link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setQueue((prev) => prev.filter((q) => q.id !== item.id))}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Remove from queue"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Feature Highlights Grid (Matching Dispatch Aesthetics) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-navy text-lg">Full-Resolution Extraction</h3>
          <p className="text-sm text-navy-muted leading-relaxed">
            Extracts master 1080p and 4K MP4 video streams, studio-quality 320kbps MP3 audio, and high-resolution photo carousels with no quality loss.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <FolderArchive className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-navy text-lg">Concurrent Bulk Queue</h3>
          <p className="text-sm text-navy-muted leading-relaxed">
            Add multiple links from TikTok, Instagram, YouTube, and Spotify in one paste. Analyze them all together and trigger instant downloads without switching tabs.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-navy text-lg">CORS-Safe Direct Download</h3>
          <p className="text-sm text-navy-muted leading-relaxed">
            Our high-speed media stream proxy sets proper Content-Disposition attachments, delivering direct disk downloads without browser player interruptions.
          </p>
        </div>
      </div>
    </div>
  );
}
