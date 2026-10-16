import { PlatformContent } from '../types';

export const snapchatContent: PlatformContent = {
  slug: 'snapchat',
  name: 'Snapchat Spotlight',
  tagline: 'Public Spotlight & Verified Story Archive Engine',
  heroH1: 'Save Public Snapchat Spotlight Videos & Stories',
  heroSubtitle: 'Download high-definition Snapchat Spotlight videos and verified public brand dispatches. Public broadcast content only — friends-only private snaps are strictly protected.',
  placeholderText: 'Paste public Snapchat Spotlight link (e.g., https://www.snapchat.com/spotlight/... or snapchat.com/t/...)',
  accentColor: 'oklch(0.72 0.20 95)',
  acceptedLinkExamples: [
    'https://www.snapchat.com/spotlight/W7qX1234567890',
    'https://www.snapchat.com/add/username/story/123456',
    'https://t.snapchat.com/xY1234ab',
  ],
  toolModes: [
    { id: 'spotlight-video', label: 'Spotlight Video', hint: 'Extracts full vertical 1080p MP4 Spotlight videos with sound' },
    { id: 'public-story', label: 'Verified Public Story', hint: 'Resolves active public dispatches from verified creator profiles' },
    { id: 'audio-stem', label: 'Soundtrack Extract', hint: 'Saves the audio track as a standalone 320kbps MP3' },
  ],
  behaviorExplanation: {
    heading: 'Crucial Privacy Distinction: Spotlight vs. Private Snaps',
    description: 'Snapchat is built fundamentally on ephemeral messaging. Private snaps, direct chats, and Friends-Only stories are end-to-end authenticated and temporary. Snapchat Spotlight, however, is a public entertainment feed distributed worldwide to non-friends. Dispatch works ONLY with publicly published Spotlight videos and verified creator public stories.',
    canSave: [
      'Public Snapchat Spotlight videos accessible to anyone on the web',
      'Public stories published by verified brand profiles and public figures',
      'Original creator audio soundtracks from public Spotlight clips',
      'Full 1080x1920 vertical H.264 video streams',
    ],
    cannotSave: [
      'Direct peer-to-peer Snaps sent between friends',
      'Private Stories restricted to a user Friends list',
      'Saved Memories stored in a private Snapchat account',
      'Ephemeral view-once snaps or disappearing messages',
    ],
  },
  comparisonTable: [
    {
      name: 'Spotlight Video',
      availability: 'Permanent public web URL',
      supportedFormats: 'MP4 (1080x1920 Vertical)',
      recommendedUse: 'Entertainment archiving, comedy sketches, viral sports clips',
    },
    {
      name: 'Public Creator Story',
      availability: '24-hour public window',
      supportedFormats: 'MP4 / JPEG',
      recommendedUse: 'Celebrity updates, brand product drops, event coverage',
    },
    {
      name: 'Spotlight Audio',
      availability: 'Permanent public web URL',
      supportedFormats: 'MP3 (320 kbps)',
      recommendedUse: 'Sound effects, dialogue clips, music discovery',
    },
    {
      name: 'Spotlight Thumbnail',
      availability: 'Permanent public CDN',
      supportedFormats: 'High-Res JPEG',
      recommendedUse: 'Cataloging, graphic design reference, clip previews',
    },
  ],
  contentCards: [
    {
      title: 'Full-Res Spotlight Video',
      badge: '1080x1920 MP4',
      formats: ['1080p HD', '720p HD MP4'],
      honestLimitation: 'Quality matches the creator mobile camera upload. Vertical orientation is preserved without cropping.',
      description: 'Download crisp, smooth Spotlight videos without third-party watermarks or onscreen interactive sticker clutter.',
    },
    {
      title: 'Verified Creator Dispatches',
      badge: 'Public Story',
      formats: ['MP4 Video', 'Still JPEG'],
      honestLimitation: 'Must be downloaded while the creator story remains active within its public broadcast window.',
      description: 'Preserve high-profile news releases, festival broadcasts, and brand announcements from public verified profiles.',
    },
    {
      title: 'High-Bitrate Audio Track',
      badge: 'MP3 Audio',
      formats: ['320 kbps MP3', 'M4A'],
      honestLimitation: 'Audio quality is dependent on the microphone acoustics of the original mobile recording.',
      description: 'Isolate vocal commentary, field recordings, and trending sounds cleanly for offline listening and reference.',
    },
    {
      title: 'Still Frame & Thumbnail Asset',
      badge: 'Direct JPEG',
      formats: ['Original JPEG', 'PNG'],
      honestLimitation: 'Extracted from the primary video keyframe or creator uploaded thumbnail.',
      description: 'Save clear visual stills for editorial commentary, moodboard creation, and video production references.',
    },
  ],
  useCases: [
    {
      title: 'Mobile Video Creators & Editors',
      persona: 'Short-Form Editor',
      description: 'Studying mobile video pacing, vertical framing techniques, and dynamic text animation trends on the Spotlight platform.',
    },
    {
      title: 'Trend Analysts & Youth Culture Researchers',
      persona: 'Social Anthropologist',
      description: 'Documenting spontaneous micro-trends, comedic formats, and vernacular language shifts among emerging creators.',
    },
    {
      title: 'Athletes & Action Sports Enthusiasts',
      persona: 'Freestyle Skater',
      description: 'Archiving extreme sports stunts, skate tricks, and parkour runs to analyze body mechanics frame-by-frame offline.',
    },
    {
      title: 'Brand Marketers',
      persona: 'Campaign Strategist',
      description: 'Reviewing competitor creative campaigns and public influencer takeovers on Spotlight for strategic campaign planning.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "This is a private snap or story"',
      cause: 'The link points to a private account story or direct message that is not published to public Spotlight.',
      resolution: 'Dispatch strictly does not support private snaps. Only public links containing /spotlight/ can be processed.',
    },
    {
      problem: 'Shortened link (t.snapchat.com/...) fails to load',
      cause: 'Mobile share links may contain tracking redirects that trigger app store prompts on desktop.',
      resolution: 'Open the link in your web browser, allow it to redirect to the full snapchat.com/spotlight/... URL, and paste that.',
    },
    {
      problem: 'Audio is out of sync with video',
      cause: 'Some mobile devices encode variable frame rate (VFR) video that older media players desync.',
      resolution: 'Play the file in VLC Player or QuickTime, which properly handles variable frame rate mobile streams.',
    },
    {
      problem: 'Video download is limited to 720p',
      cause: 'Snapchat dynamically scales video uploads depending on the creator network speed during recording.',
      resolution: 'Dispatch delivers the highest resolution tier available on the Snapchat public server.',
    },
    {
      problem: 'Error: "Spotlight link no longer active"',
      cause: 'The creator has deleted the video from Spotlight or it was removed by Snapchat moderation.',
      resolution: 'Verify if the video still plays publicly in an incognito browser tab.',
    },
  ],
  faqs: [
    {
      question: 'Can I download private Snaps from my friends using Dispatch?',
      answer: 'No, absolutely not. Dispatch has an unbreakable architectural rule: we never touch, access, or build tools for private snaps, direct messages, or friends-only stories. Only public Spotlight and verified public broadcasts are supported.',
    },
    {
      question: 'Do I need a Snapchat account or app installed?',
      answer: 'No. You can inspect and download public Spotlight videos on any desktop or mobile browser without signing in or installing the Snapchat app.',
    },
    {
      question: 'Does the creator receive a screenshot or download notification?',
      answer: 'No. Because Spotlight videos are hosted publicly on the web, downloads made through Dispatch do not trigger user notifications or screenshot alerts.',
    },
    {
      question: 'What format are downloaded Spotlight videos?',
      answer: 'All Spotlight videos are saved as standard vertical H.264 MP4 files with AAC audio, compatible with all devices and editors.',
    },
    {
      question: 'Can I save Spotlight videos directly to my iPhone Camera Roll?',
      answer: 'Yes. In mobile Safari, tap Download on your preferred resolution, tap the Safari downloads indicator, open the file, and tap "Save Video" from the Share menu.',
    },
    {
      question: 'Is it free to download Snapchat Spotlight videos?',
      answer: 'Yes, 100% free with no limits, no subscription paywalls, and no account requirements.',
    },
    {
      question: 'Can I extract just the audio from a Spotlight clip?',
      answer: 'Yes. Switch to the Audio option to extract a clean 320 kbps MP3 file.',
    },
    {
      question: 'Why does Dispatch emphasize public content only?',
      answer: 'Because respecting personal privacy and creators ethical boundaries is central to our design philosophy. We build precision tools for the public web, not surveillance or snooping tools.',
    },
  ],
  closingCta: {
    heading: 'Save Public Snapchat Spotlight Clips',
    subheading: 'High-definition vertical MP4 streams, verified public accessibility, and absolute privacy.',
    buttonText: 'Inspect Spotlight URL',
  },
  sectionOrder: ['behavior', 'how-to', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};
