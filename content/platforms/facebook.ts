import { PlatformContent } from '../types';

export const facebookContent: PlatformContent = {
  slug: 'facebook',
  name: 'Facebook',
  tagline: 'Clean Stream Archival for Public Facebook Videos, Reels & Watch Posts',
  heroH1: 'Save Public Facebook Videos, Reels & Community Broadcasts',
  heroSubtitle: 'Download high-definition public Facebook video broadcasts and educational content without invasive tracking cookies or account logins. Universal MP4 format with audio sync.',
  placeholderText: 'Paste public Facebook link (e.g., https://www.facebook.com/watch/?v=... or fb.watch/...)',
  accentColor: 'oklch(0.55 0.18 240)',
  acceptedLinkExamples: [
    'https://www.facebook.com/watch/?v=123456789012345',
    'https://fb.watch/xY1234abcd/',
    'https://www.facebook.com/reel/987654321098765',
  ],
  toolModes: [
    { id: 'hd-video', label: 'HD Quality (720p/1080p)', hint: 'Resolves the highest available CDN video bitrate' },
    { id: 'sd-video', label: 'SD Quality (Mobile)', hint: 'Lightweight format optimized for low bandwidth and older phones' },
    { id: 'audio-only', label: 'Audio Extract (MP3)', hint: 'Extracts the speech and soundtrack as a standalone MP3' },
  ],
  behaviorExplanation: {
    heading: 'Navigating Facebook Complex Privacy & URL Structures',
    description: 'Facebook has one of the web most intricate privacy permissions. Videos posted inside private groups, restricted pages, or marked "Friends Only" are token-authenticated. Dispatch works exclusively on completely public Facebook posts, public Page broadcasts, and public Reels.',
    canSave: [
      'Public Facebook Page video posts and masterclasses',
      'Public Facebook Reels published for open audience viewing',
      'Archived public Facebook Live broadcasts once stream concludes',
      'Watch platform public documentaries and community clips',
    ],
    cannotSave: [
      'Private Facebook Groups (even if you are a member of the group)',
      'Personal timeline posts shared with "Friends" or "Custom" privacy',
      'Active live streams while the broadcaster is still live on air',
      'Messenger video attachments or private chat recordings',
    ],
  },
  comparisonTable: [
    {
      name: 'Facebook Reels',
      availability: 'Permanent public URL',
      supportedFormats: 'MP4 (1080p / 720p)',
      recommendedUse: 'Mobile video archives, recipe storage, DIY crafting guides',
    },
    {
      name: 'Page Broadcasts',
      availability: 'Permanent public URL',
      supportedFormats: 'MP4 (HD Quality)',
      recommendedUse: 'Civic meetings, town halls, community festival records',
    },
    {
      name: 'Live Stream Archives',
      availability: 'Post-broadcast public URL',
      supportedFormats: 'MP4 (Standard Definition / HD)',
      recommendedUse: 'Religious ceremonies, public school graduations, concerts',
    },
    {
      name: 'Speech Audio',
      availability: 'Permanent public URL',
      supportedFormats: 'MP3 (320 kbps)',
      recommendedUse: 'Podcasts, keynote speeches, offline audio learning',
    },
  ],
  contentCards: [
    {
      title: 'Full HD Public Video',
      badge: 'MP4 · H.264',
      formats: ['1080p HD', '720p HD', 'SD 480p'],
      honestLimitation: 'Facebook applies variable compression. We pull the master stream flagged as "HD" on the Meta content server.',
      description: 'Preserves the original video and audio synchronization without inserting logos, watermark bugs, or advertising overlays.',
    },
    {
      title: 'Facebook Reels Vertical Master',
      badge: 'Vertical 9:16',
      formats: ['1080x1920 MP4', 'Audio MP3'],
      honestLimitation: 'Reels are capped at 1080p. Quality reflects the creator upload bitrate.',
      description: 'Save portrait-mode tutorials, fitness workouts, and craftsmanship demonstrations cleanly to your phone or tablet.',
    },
    {
      title: 'Post-Broadcast Live Archive',
      badge: 'Extended Duration',
      formats: ['Complete Stream MP4', 'Audio Extract'],
      honestLimitation: 'Only available after the live broadcast ends and Facebook finishes processing the complete video archive.',
      description: 'Store civic council discussions, cultural ceremonies, and public press statements for permanent community records.',
    },
    {
      title: 'Speech & Music Audio Stem',
      badge: 'MP3 Audio',
      formats: ['320 kbps CBR', '192 kbps'],
      honestLimitation: 'Audio quality is dependent on the original stream microphone and acoustics.',
      description: 'Extract clear audio from lectures, speeches, and interviews for listening on your commute or offline audio player.',
    },
  ],
  useCases: [
    {
      title: 'Local Community Historians',
      persona: 'Civic Archivist',
      description: 'Archiving public town hall meetings, historic society lectures, and local cultural festivals posted to public civic Facebook pages.',
    },
    {
      title: 'Craftspeople & DIY Builders',
      persona: 'Woodworker / Maker',
      description: 'Saving detailed woodworking, gardening, and mechanics tutorials to consult offline in workshops with no Wi-Fi coverage.',
    },
    {
      title: 'Non-Profit Organizations',
      persona: 'Outreach Coordinator',
      description: 'Preserving public awareness campaigns and community success stories for annual impact reporting and grant documentation.',
    },
    {
      title: 'Family Historians',
      persona: 'Genealogist',
      description: 'Backing up public historical anniversary videos and memorial services shared openly by heritage organizations.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "This content is from a Private Group"',
      cause: 'Facebook groups require account authentication and member permissions that Dispatch does not possess.',
      resolution: 'Dispatch strictly does not support private groups. Only publicly viewable Facebook Page and profile videos can be fetched.',
    },
    {
      problem: 'Shortened link (fb.watch/...) does not load',
      cause: 'Shortened Facebook share links sometimes bounce through authentication tracking redirects.',
      resolution: 'Open the link in your web browser, copy the full URL from the address bar (facebook.com/watch/?v=...), and paste that here.',
    },
    {
      problem: 'Only "SD Quality" is shown in available options',
      cause: 'The uploader did not provide an HD video or Facebook server has not finished encoding the HD version.',
      resolution: 'For freshly uploaded videos, wait 10-15 minutes for Facebook to finish HD processing, then inspect the link again.',
    },
    {
      problem: 'Video download stops halfway through',
      cause: 'Long Facebook videos (1+ hour) can experience temporary network timeouts on slow connections.',
      resolution: 'Retry the download or use a reliable download manager that supports resume capability.',
    },
    {
      problem: 'Error: "Content unavailable or link removed"',
      cause: 'The post may have been deleted, set to private, or region-restricted by the page administrator.',
      resolution: 'Check if the video can be viewed in a private browser tab without logging into Facebook.',
    },
  ],
  faqs: [
    {
      question: 'Can I download videos from private Facebook groups?',
      answer: 'No. Dispatch strictly operates on public content only. We cannot and do not bypass Facebook group privacy settings or private timeline restrictions.',
    },
    {
      question: 'Do I need a Facebook account to use this downloader?',
      answer: 'No. You do not need an account, and you never need to connect your profile or provide passwords.',
    },
    {
      question: 'How do I download a Facebook Reel on iPhone?',
      answer: 'Tap the Share icon on the Facebook Reel, choose "Copy Link", paste it into Dispatch in mobile Safari, tap Download, and tap the Safari download arrow to view or save to Photos.',
    },
    {
      question: 'What is the maximum video length supported?',
      answer: 'Dispatch supports standard public videos up to several hours in duration, provided the public CDN stream remains accessible.',
    },
    {
      question: 'Is it free to download Facebook videos here?',
      answer: 'Yes, 100% free with no registration, no subscription fees, and no hidden charges.',
    },
    {
      question: 'Does Facebook know that I downloaded a video?',
      answer: 'No. The download request is made anonymously through our server gateway. Facebook does not track or notify the uploader.',
    },
    {
      question: 'Can I convert a Facebook video to an MP3 audio file?',
      answer: 'Yes. Every public video inspection gives you both MP4 video formats and a clean 320kbps MP3 audio download option.',
    },
    {
      question: 'Where are Facebook videos saved on my PC?',
      answer: 'Videos are saved directly into your Windows or Mac default Downloads folder as standard MP4 files.',
    },
  ],
  closingCta: {
    heading: 'Save Public Facebook Video Dispatches',
    subheading: 'Clean MP4 streams, zero tracking scripts, and verified public availability.',
    buttonText: 'Inspect Facebook Link',
  },
  sectionOrder: ['how-to', 'behavior', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};
