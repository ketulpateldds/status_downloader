import { NextRequest, NextResponse } from 'next/server';
import {
  youtube,
  ttdl,
  igdl,
  fbdown,
  twitter,
  pinterest,
  spotify,
  soundcloud,
  capcut,
  threads,
  aio,
} from 'btch-downloader';
import { detectPlatformFromUrl, MediaInfo, FormatOption } from '@/lib/api/downloader';

function withTimeout<T>(promise: Promise<T>, ms: number = 15000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              'Extraction timed out. The media server took too long to respond. Please try again.'
            )
          ),
        ms
      )
    ),
  ]);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, platform: platformHint } = body;

    if (!url || typeof url !== 'string' || !/^https?:\/\//i.test(url.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid URL starting with https://' },
        { status: 400 }
      );
    }

    const cleanUrl = url.trim();
    const platform = (platformHint && platformHint !== 'auto')
      ? platformHint
      : (detectPlatformFromUrl(cleanUrl) || 'generic');

    let title = 'Public Media File';
    let author = 'Creator';
    let thumbnailUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
    const formats: FormatOption[] = [];

    if (platform === 'youtube') {
      const res = await withTimeout(youtube(cleanUrl));
      if (res.title) title = res.title;
      if (res.author) author = res.author;
      if (res.thumbnail) thumbnailUrl = res.thumbnail;

      if (res.mp4) {
        formats.push({
          id: 'yt-mp4-hd',
          label: 'MP4 HD Video',
          quality: '720p/1080p',
          format: 'mp4',
          sizeFormatted: 'Fast Direct Stream',
          sizeBytes: 0,
          url: res.mp4,
          isAudioOnly: false,
        });
      }

      if (res.mp3) {
        formats.push({
          id: 'yt-mp3-audio',
          label: 'MP3 High Quality Audio',
          quality: '320 kbps',
          format: 'mp3',
          sizeFormatted: 'Audio Track',
          sizeBytes: 0,
          url: res.mp3,
          isAudioOnly: true,
        });
      }
    } else if (platform === 'tiktok') {
      const res = await withTimeout(ttdl(cleanUrl));
      if (res.title) title = res.title;
      if (res.thumbnail) thumbnailUrl = res.thumbnail;
      author = 'TikTok Creator';

      if (res.video && res.video.length > 0) {
        res.video.forEach((vUrl, idx) => {
          formats.push({
            id: `tt-video-${idx}`,
            label: idx === 0 ? 'HD Video (No Watermark)' : `Video Server ${idx + 1}`,
            quality: 'HD',
            format: 'mp4',
            sizeFormatted: 'Direct Stream',
            sizeBytes: 0,
            url: vUrl,
            isAudioOnly: false,
          });
        });
      }

      if (res.audio && res.audio.length > 0) {
        formats.push({
          id: 'tt-audio',
          label: res.title_audio || 'Original TikTok Audio',
          quality: 'Audio',
          format: 'mp3',
          sizeFormatted: 'Sound Track',
          sizeBytes: 0,
          url: res.audio[0],
          isAudioOnly: true,
        });
      }
    } else if (platform === 'instagram') {
      const res = await withTimeout(igdl(cleanUrl));
      title = 'Instagram Media';
      author = 'Instagram Post';

      if (res.result && Array.isArray(res.result) && res.result.length > 0) {
        if (res.result[0].thumbnail) {
          thumbnailUrl = res.result[0].thumbnail;
        }
        res.result.forEach((item, idx) => {
          const isVideo = item.url.includes('.mp4') || !item.url.includes('.jpg');
          formats.push({
            id: `ig-media-${idx}`,
            label: isVideo ? `Reel / Video ${idx + 1}` : `Photo / Story ${idx + 1}`,
            quality: 'Original HD',
            format: isVideo ? 'mp4' : 'jpg',
            sizeFormatted: 'Direct Link',
            sizeBytes: 0,
            url: item.url,
            isAudioOnly: false,
          });
        });
      }
    } else if (platform === 'facebook') {
      const res = await withTimeout(fbdown(cleanUrl));
      title = 'Facebook Public Video';
      author = 'Facebook User';

      if (res.HD) {
        formats.push({
          id: 'fb-hd',
          label: 'HD High Definition Video',
          quality: 'HD',
          format: 'mp4',
          sizeFormatted: 'Best Quality',
          sizeBytes: 0,
          url: res.HD,
          isAudioOnly: false,
        });
      }

      if (res.Normal_video) {
        formats.push({
          id: 'fb-sd',
          label: 'Standard Definition Video',
          quality: 'SD',
          format: 'mp4',
          sizeFormatted: 'Normal Quality',
          sizeBytes: 0,
          url: res.Normal_video,
          isAudioOnly: false,
        });
      }
    } else if (platform === 'twitter') {
      const res = await withTimeout(twitter(cleanUrl));
      if (res.title) title = res.title;
      author = 'X / Twitter Post';

      if (res.url) {
        formats.push({
          id: 'tw-video',
          label: 'X (Twitter) Video',
          quality: 'HD',
          format: 'mp4',
          sizeFormatted: 'Direct Link',
          sizeBytes: 0,
          url: res.url,
          isAudioOnly: false,
        });
      }
    } else if (platform === 'pinterest') {
      const res = await withTimeout(pinterest(cleanUrl));
      title = 'Pinterest Pin';
      author = 'Pinterest Creator';

      if (res.result && Array.isArray(res.result) && res.result.length > 0) {
        const pin = res.result[0];
        if (pin.title) title = pin.title;
        if (pin.image_url) thumbnailUrl = pin.image_url;

        if (pin.video_url) {
          formats.push({
            id: 'pin-video',
            label: 'Pinterest Video',
            quality: 'HD',
            format: 'mp4',
            sizeFormatted: 'Direct Link',
            sizeBytes: 0,
            url: pin.video_url,
            isAudioOnly: false,
          });
        }

        if (pin.image_url) {
          formats.push({
            id: 'pin-image',
            label: 'High-Res Pin Image',
            quality: 'Original',
            format: 'jpg',
            sizeFormatted: 'Image File',
            sizeBytes: 0,
            url: pin.image_url,
            isAudioOnly: false,
          });
        }
      }
    } else if (platform === 'spotify') {
      const res = await withTimeout(spotify(cleanUrl));
      if (res.result) {
        if (res.result.title) title = res.result.title;
        if (res.result.thumbnail) thumbnailUrl = res.result.thumbnail;
        author = 'Spotify Artist';

        if (Array.isArray(res.result.formats)) {
          res.result.formats.forEach((fmt: any, idx: number) => {
            if (fmt.url) {
              formats.push({
                id: `spotify-mp3-${idx}`,
                label: `${fmt.quality || '320kbps'} MP3 Audio Track`,
                quality: fmt.quality || '320kbps',
                format: 'mp3',
                sizeFormatted: fmt.filesize || 'Audio Track',
                sizeBytes: 0,
                url: fmt.url,
                isAudioOnly: true,
              });
            }
          });
        }
      }
    } else if (platform === 'soundcloud') {
      const res = await withTimeout(soundcloud(cleanUrl));
      if (res.result) {
        if (res.result.title) title = res.result.title;
        if (res.result.thumbnail) thumbnailUrl = res.result.thumbnail;
        author = 'SoundCloud Artist';

        const audioUrl = res.result.downloadMp3 || res.result.audio;
        if (audioUrl) {
          formats.push({
            id: 'soundcloud-mp3',
            label: 'SoundCloud HQ MP3 Track',
            quality: 'High Quality',
            format: 'mp3',
            sizeFormatted: 'Direct Stream',
            sizeBytes: 0,
            url: audioUrl,
            isAudioOnly: true,
          });
        }
        if (res.result.downloadArtwork) {
          formats.push({
            id: 'soundcloud-art',
            label: 'Album Artwork (HD Cover)',
            quality: 'HD',
            format: 'jpg',
            sizeFormatted: 'Original Image',
            sizeBytes: 0,
            url: res.result.downloadArtwork,
            isAudioOnly: false,
          });
        }
      }
    } else if (platform === 'capcut') {
      const res = await withTimeout(capcut(cleanUrl));
      if (res.title) title = res.title;
      if (res.coverUrl) thumbnailUrl = res.coverUrl;
      if (res.authorName) author = res.authorName;

      if (res.originalVideoUrl) {
        formats.push({
          id: 'capcut-video',
          label: 'CapCut Template Video (No Watermark)',
          quality: 'Original HD',
          format: 'mp4',
          sizeFormatted: 'Direct Link',
          sizeBytes: 0,
          url: res.originalVideoUrl,
          isAudioOnly: false,
        });
      }
    } else if (platform === 'threads') {
      const res = await withTimeout(threads(cleanUrl));
      title = 'Threads Post Media';
      author = 'Threads Creator';

      if (res.result) {
        if (res.result.image) thumbnailUrl = res.result.image;
        if (res.result.type === 'video' && res.result.video) {
          formats.push({
            id: 'threads-video',
            label: 'Threads Video (MP4)',
            quality: 'Original HD',
            format: 'mp4',
            sizeFormatted: 'Direct Link',
            sizeBytes: 0,
            url: res.result.video,
            isAudioOnly: false,
          });
        }
        if (res.result.image) {
          formats.push({
            id: 'threads-image',
            label: 'Threads Photo (JPG)',
            quality: 'Original',
            format: 'jpg',
            sizeFormatted: 'Direct Image',
            sizeBytes: 0,
            url: res.result.image,
            isAudioOnly: false,
          });
        }
      }
    } else {
      // Try All-In-One (aio) extractor as fallback
      const res = await withTimeout(aio(cleanUrl));
      if (res.result?.title) title = res.result.title;

      if (res.mp4 && typeof res.mp4 === 'string') {
        formats.push({
          id: 'aio-mp4',
          label: 'Download Video (MP4)',
          quality: 'HD',
          format: 'mp4',
          sizeFormatted: 'Direct Link',
          sizeBytes: 0,
          url: res.mp4,
          isAudioOnly: false,
        });
      }
      if (res.mp3 && typeof res.mp3 === 'string') {
        formats.push({
          id: 'aio-mp3',
          label: 'Download Audio (MP3)',
          quality: 'Audio',
          format: 'mp3',
          sizeFormatted: 'Direct Link',
          sizeBytes: 0,
          url: res.mp3,
          isAudioOnly: true,
        });
      }
    }

    if (formats.length === 0) {
      return NextResponse.json(
        {
          error:
            "Could not extract downloadable media from this link. Make sure it is a public video or post and try again.",
        },
        { status: 422 }
      );
    }

    const responsePayload: MediaInfo = {
      id: 'disp_' + Math.random().toString(36).substring(2, 9),
      platform,
      platformDisplayName:
        platform === 'twitter'
          ? 'X (Twitter)'
          : platform === 'capcut'
          ? 'CapCut'
          : platform === 'soundcloud'
          ? 'SoundCloud'
          : platform === 'youtube'
          ? 'YouTube'
          : platform === 'tiktok'
          ? 'TikTok'
          : platform.charAt(0).toUpperCase() + platform.slice(1),
      title,
      author,
      authorHandle: '@' + author.toLowerCase().replace(/\s+/g, ''),
      authorAvatarUrl: thumbnailUrl,
      thumbnailUrl,
      publishedDate: 'Public Post',
      isVerifiedPublic: true,
      type: formats.some((f) => f.isAudioOnly) ? 'audio' : 'video',
      formats,
      disclaimer: 'Only download public content you own or have permission to save.',
    };

    return NextResponse.json(responsePayload);
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Error in /api/download route:', error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "We couldn't open that link. Check that it's a public post and try again.",
      },
      { status: 500 }
    );
  }
}
