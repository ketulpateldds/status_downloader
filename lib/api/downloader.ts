/**
 * Mock Service Layer for Dispatch Downloader
 * Returns realistic fake media data after a short simulated delay.
 * Allows replacing with real backend (e.g. yt-dlp/FastAPI/Node) without modifying UI components.
 */

export interface FormatOption {
  id: string;
  label: string;
  quality: string;
  format: 'mp4' | 'mp3' | 'jpg' | 'png' | 'webp';
  resolution?: string;
  bitrate?: string;
  sizeFormatted: string;
  sizeBytes: number;
  url: string;
  isAudioOnly?: boolean;
}

export interface MediaInfo {
  id: string;
  platform: 'instagram' | 'youtube' | 'tiktok' | 'twitter' | 'facebook' | 'pinterest' | 'snapchat' | 'mp3' | 'generic';
  platformDisplayName: string;
  title: string;
  author: string;
  authorHandle: string;
  authorAvatarUrl: string;
  thumbnailUrl: string;
  duration?: string;
  durationSeconds?: number;
  publishedDate: string;
  isVerifiedPublic: boolean;
  type: 'video' | 'reel' | 'short' | 'audio' | 'photo' | 'story';
  formats: FormatOption[];
  disclaimer: string;
}

export type DownloadErrorCode = 
  | 'INVALID_URL'
  | 'UNSUPPORTED_PLATFORM'
  | 'PRIVATE_OR_RESTRICTED'
  | 'CONTENT_UNAVAILABLE'
  | 'RATE_LIMITED';

export interface DownloadError {
  code: DownloadErrorCode;
  message: string;
  helpText: string;
}

export function detectPlatformFromUrl(url: string): MediaInfo['platform'] | null {
  const clean = url.trim().toLowerCase();
  if (/instagram\.com/.test(clean)) return 'instagram';
  if (/youtube\.com|youtu\.be/.test(clean)) return 'youtube';
  if (/tiktok\.com/.test(clean)) return 'tiktok';
  if (/twitter\.com|x\.com/.test(clean)) return 'twitter';
  if (/facebook\.com|fb\.watch/.test(clean)) return 'facebook';
  if (/pinterest\.com|pin\.it/.test(clean)) return 'pinterest';
  if (/snapchat\.com/.test(clean)) return 'snapchat';
  if (/\.(mp3|wav|m4a|aac)(\?.*)?$/i.test(clean)) return 'mp3';
  return null;
}

export async function fetchMediaDetails(url: string): Promise<MediaInfo> {
  // Simulate network latency (600 - 900ms)
  await new Promise((resolve) => setTimeout(resolve, 750));

  const trimmed = url.trim();
  if (!trimmed || !/^https?:\/\//i.test(trimmed)) {
    const err: DownloadError = {
      code: 'INVALID_URL',
      message: 'Please paste a valid web URL starting with https://',
      helpText: 'Example: https://instagram.com/reel/C8xxx or https://youtu.be/xxx',
    };
    throw err;
  }

  const platform = detectPlatformFromUrl(trimmed) || 'generic';

  // Check for private / restricted signals
  if (trimmed.includes('private') || trimmed.includes('/messages/') || trimmed.includes('/stories/friends/')) {
    const err: DownloadError = {
      code: 'PRIVATE_OR_RESTRICTED',
      message: 'Private and login-protected content cannot be fetched.',
      helpText: 'Dispatch strictly operates on publicly accessible posts and shared media.',
    };
    throw err;
  }

  // Realistic mock generation based on platform
  const sampleThumbnails: Record<string, string> = {
    instagram: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    youtube: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    tiktok: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    twitter: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80',
    facebook: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    pinterest: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    snapchat: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    mp3: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    generic: 'https://images.unsplash.com/photo-1507842229451-7975ab938808?auto=format&fit=crop&w=800&q=80',
  };

  const sampleTitles: Record<string, string> = {
    instagram: 'Cinematic Architectural Transitions in Tokyo · Public Reel',
    youtube: 'Complete Guide to Typography & Grid Systems (1080p Public Master)',
    tiktok: 'Sound Design Breakdown in 60 Seconds [High Quality Audio]',
    twitter: 'SpaceX Starship Orbital Velocity Re-entry Telemetry Feed',
    facebook: 'Open Craft Woodworking: Traditional Japanese Joinery Documented',
    pinterest: 'Bauhaus Editorial Poster Collection & Typography Specimens',
    snapchat: 'Spotlight Public Showcase: Urban Street Photography Highlights',
    mp3: 'Field Recording: High Sierra Mountain Stream Ambient Master (320kbps)',
    generic: 'Public High-Definition Video Broadcast',
  };

  const sampleAuthors: Record<string, { name: string; handle: string }> = {
    instagram: { name: 'Studio Kensho', handle: '@studiokensho' },
    youtube: { name: 'Dieter Rams Archive Project', handle: '@rams_project' },
    tiktok: { name: 'Audio Craft Studio', handle: '@audiocraft' },
    twitter: { name: 'Aerospace Wire', handle: '@aerospacedispatch' },
    facebook: { name: 'Traditional Guild Collective', handle: '@guildcraft' },
    pinterest: { name: 'Form & Specimen Archive', handle: '@formspecimen' },
    snapchat: { name: 'City Lens Public', handle: '@citylens' },
    mp3: { name: 'Acoustic Ecology Lab', handle: '@soundarch' },
    generic: { name: 'Public Contributor', handle: '@publicdomain' },
  };

  const author = sampleAuthors[platform] || sampleAuthors.generic;

  const formats: FormatOption[] = [
    {
      id: 'f-1080p',
      label: '1080p Full HD Video',
      quality: '1080p',
      resolution: '1920x1080',
      format: 'mp4',
      sizeFormatted: '38.4 MB',
      sizeBytes: 40265318,
      url: '#download-1080p',
    },
    {
      id: 'f-720p',
      label: '720p HD Standard',
      quality: '720p',
      resolution: '1280x720',
      format: 'mp4',
      sizeFormatted: '18.2 MB',
      sizeBytes: 19084083,
      url: '#download-720p',
    },
    {
      id: 'f-480p',
      label: '480p SD Mobile',
      quality: '480p',
      resolution: '854x480',
      format: 'mp4',
      sizeFormatted: '9.6 MB',
      sizeBytes: 10066329,
      url: '#download-480p',
    },
    {
      id: 'f-mp3-320',
      label: 'Audio Extract (320 kbps MP3)',
      quality: '320 kbps',
      bitrate: '320kbps CBR',
      format: 'mp3',
      sizeFormatted: '4.8 MB',
      sizeBytes: 5033164,
      url: '#download-audio-hq',
      isAudioOnly: true,
    },
  ];

  return {
    id: 'disp_' + Math.random().toString(36).substring(2, 9),
    platform,
    platformDisplayName: platform.charAt(0).toUpperCase() + platform.slice(1),
    title: sampleTitles[platform] || 'Public Media Asset',
    author: author.name,
    authorHandle: author.handle,
    authorAvatarUrl: sampleThumbnails[platform],
    thumbnailUrl: sampleThumbnails[platform],
    duration: '01:42',
    durationSeconds: 102,
    publishedDate: 'Public Stream · Verified Origin',
    isVerifiedPublic: true,
    type: platform === 'mp3' ? 'audio' : 'video',
    formats,
    disclaimer: 'Public media only. Only save content you own or have verified permission to store locally.',
  };
}
