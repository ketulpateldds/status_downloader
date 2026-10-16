import { PlatformContent } from '../types';

export const instagramContent: PlatformContent = {
  slug: 'instagram',
  name: 'Instagram',
  tagline: 'Archival Inspector for Public Reels, Posts & Active Stories',
  heroH1: 'Save Public Instagram Reels, Audio & High-Res Carousels',
  heroSubtitle: 'Direct extraction of published Instagram video feeds and photography. No compression downgrades, no third-party logins, and strictly limited to public accounts.',
  placeholderText: 'Paste public Instagram URL (e.g., https://www.instagram.com/reel/C8_...)',
  accentColor: 'oklch(0.65 0.22 28)',
  acceptedLinkExamples: [
    'https://www.instagram.com/reel/C8qXYZ123/',
    'https://www.instagram.com/p/DB1234567/',
    'https://www.instagram.com/stories/username/123456/',
  ],
  toolModes: [
    { id: 'reel-post', label: 'Reels & Posts', hint: 'Extracts full H.264 MP4 streams and uncompressed JPEG photo slides' },
    { id: 'public-story', label: 'Public Stories (24h)', hint: 'Resolves active 24-hour public story videos directly from public handles' },
    { id: 'audio-extract', label: 'Original Sound', hint: 'Renders the standalone reel background audio soundtrack as 320kbps MP3' },
  ],
  behaviorExplanation: {
    heading: 'Understanding Public Instagram Content Lifecycles',
    description: 'Instagram structures media into distinct CDN lifecycles. Reels and grid carousels exist perpetually on the Meta graph until deleted or archived by the creator. In contrast, Stories expire from public CDN caches exactly 24 hours after publication. Dispatch accesses only publicly published nodes.',
    canSave: [
      'Published public Reels in original 1080x1920 portrait aspect ratio',
      'Multi-photo carousel posts with individual slide downloads',
      'Active public Stories published within the last 24 hours',
      'Direct audio tracks from Reels where original music is tagged',
    ],
    cannotSave: [
      'Private account posts (accounts that require approved follow requests)',
      'Close Friends Stories (token-authenticated private streams)',
      'Deleted or expired stories past the 24-hour retention window',
      'Direct Message media or temporary view-once photos',
    ],
  },
  comparisonTable: [
    {
      name: 'Reels',
      availability: 'Permanent public CDN',
      supportedFormats: 'MP4 (1080p, 60fps)',
      recommendedUse: 'Motion reference, editorial archival, video editing assets',
    },
    {
      name: 'Grid Carousels',
      availability: 'Permanent public CDN',
      supportedFormats: 'Original JPEG (1080px wide)',
      recommendedUse: 'Visual swipe files, graphic design research, slide decks',
    },
    {
      name: 'Public Stories',
      availability: 'Strict 24-hour window',
      supportedFormats: 'MP4 (Vertical 1080p) / JPEG',
      recommendedUse: 'Time-sensitive news reporting, creator announcements',
    },
    {
      name: 'Reel Audio',
      availability: 'Permanent (if original audio)',
      supportedFormats: 'MP3 (up to 320 kbps)',
      recommendedUse: 'Podcast snippets, sound design references, licensed score checks',
    },
  ],
  contentCards: [
    {
      title: 'Full-Resolution Reels',
      badge: 'MP4 · H.264',
      formats: ['1080p Full HD', '720p Mobile', 'Audio Only'],
      honestLimitation: 'Maximum resolution is capped at Instagram native upload resolution (1080x1920). We never upscale or add artificial compression artifacts.',
      description: 'Preserves the crisp native bitrate and original frame pacing without injecting watermarks, overlay stamps, or audio desync.',
    },
    {
      title: 'Lossless Carousel Slides',
      badge: 'JPEG / PNG',
      formats: ['Full Slide Pack', 'Individual Frames'],
      honestLimitation: 'Carousel slides are served at Meta maximum 1080px width. Retains EXIF data when provided by the public CDN node.',
      description: 'Extracts every slide from educational, photographic, or graphic carousels in chronological sequence with zero quality decay.',
    },
    {
      title: 'Active Public Stories',
      badge: '24-Hour Cache',
      formats: ['MP4 Video', 'Still JPEG'],
      honestLimitation: 'Must be fetched while the story is currently active on Instagram. Stories archived in private folders cannot be retrieved.',
      description: 'Save fleeting public announcements, breaking field dispatches, and public brand campaign stories before they drop off the wire.',
    },
    {
      title: 'Clean Audio Stems',
      badge: 'MP3 Audio',
      formats: ['320 kbps CBR', '192 kbps VBR'],
      honestLimitation: 'Licensed commercial songs may have region restrictions. Original creator audio stems extract cleanly.',
      description: 'Isolates the clean audio track from speech, commentary, or ambient reels for local transcript reference and offline review.',
    },
  ],
  useCases: [
    {
      title: 'Video Editors & Motion Designers',
      persona: 'Post-Production Creative',
      description: 'Building offline client moodboards and studying frame transitions, pacing, and color grading techniques without relying on spotty streaming.',
    },
    {
      title: 'Journalists & Fact-Checkers',
      persona: 'Investigative Reporter',
      description: 'Preserving public statements, eyewitness video footage, and civic event reels as timestamped primary records before account edits occur.',
    },
    {
      title: 'Social Media Managers',
      persona: 'Brand Archivist',
      description: 'Backing up their brand company public reels and customer-permitted mentions for historical campaign compliance and quarterly reviews.',
    },
    {
      title: 'Students & Lifelong Learners',
      persona: 'Academic Researcher',
      description: 'Archiving micro-lectures, design tutorials, and scientific explanations for review on flights, remote trains, or low-connectivity zones.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "Content is from a private account"',
      cause: 'The post author has set their Instagram privacy setting to Private.',
      resolution: 'Dispatch strictly does not bypass privacy controls. Ask the creator for permission or use links from verified public creator profiles.',
    },
    {
      problem: 'Story download fails with "Asset expired"',
      cause: 'The 24-hour public window elapsed while the link was being pasted.',
      resolution: 'Verify on Instagram if the story is still live in the user profile ring. If it has disappeared, the CDN cache has cleared.',
    },
    {
      problem: 'Audio is missing or muted in downloaded video',
      cause: 'Instagram occasionally separates video and audio tracks or flags audio in specific geographical jurisdictions.',
      resolution: 'Select the "Combined 1080p" format option or extract the standalone MP3 track using our audio mode.',
    },
    {
      problem: 'Mobile browser opens the video in a tab instead of saving',
      cause: 'Safari on iOS and Chrome on Android sometimes preview MP4 streams inline.',
      resolution: 'On iPhone, tap the Safari share sheet icon and choose "Save to Files". On Android, long-press the video and select "Download video".',
    },
    {
      problem: 'Link error: "Unrecognized Instagram URL pattern"',
      cause: 'URL might contain trailing tracking tokens from an app share modal (e.g. ?igsh=...).',
      resolution: 'Dispatch automatically cleans tracking parameters, but if it fails, delete everything from the question mark (?) onward.',
    },
  ],
  faqs: [
    {
      question: 'Is it legal to download public Instagram Reels and posts?',
      answer: 'Yes, saving publicly available content for personal offline viewing, research, commentary, and archiving falls under fair use in most legal frameworks. You must never redistribute, resell, or claim ownership of content created by others without their verified written consent.',
    },
    {
      question: 'Do I need to sign in with my Instagram or Facebook account?',
      answer: 'Never. Dispatch has zero login gates, requires no account linking, and does not request your Meta credentials. We inspect only public CDN endpoints.',
    },
    {
      question: 'Does the account owner know I downloaded their Reel or Story?',
      answer: 'No. Downloads through Dispatch are completely anonymous direct server queries. Instagram does not notify creators or log external viewers who access public endpoints.',
    },
    {
      question: 'What is the highest video resolution available for Instagram Reels?',
      answer: 'Instagram encodes video at a maximum resolution of 1080x1920 (Full HD portrait) at roughly 3.5 to 5 Mbps bitrate. Dispatch extracts the highest bitrate master copy available on the server.',
    },
    {
      question: 'Can I download private Instagram accounts or Close Friends Stories?',
      answer: 'No. Dispatch has a zero-compromise architectural rule: we do not support, build tools for, or facilitate access to private, restricted, or password-protected content.',
    },
    {
      question: 'Where do downloaded Instagram videos go on iPhone and iPad?',
      answer: 'On iOS, Safari downloads files into your device "Downloads" folder, accessible through the native Files app. You can tap the file, hit the Share icon, and select "Save Video" to place it in your Photos camera roll.',
    },
    {
      question: 'Where do downloads go on Android phones and tablets?',
      answer: 'Android places downloads into your device Downloads folder. Most native Gallery and Google Photos apps automatically detect and index newly downloaded MP4 videos immediately.',
    },
    {
      question: 'Can I extract just the background audio track from an Instagram Reel?',
      answer: 'Yes. Every Reel inspection generates both video options (1080p/720p) and an extracted 320kbps MP3 audio option so you can save songs, quotes, or voice notes cleanly.',
    },
  ],
  closingCta: {
    heading: 'Inspect Another Public Instagram Dispatch',
    subheading: 'Instant link analysis, clean stream extraction, and zero watermarks across all devices.',
    buttonText: 'Paste New Instagram Link',
  },
  sectionOrder: ['how-to', 'behavior', 'table', 'cards', 'use-cases', 'troubleshooting', 'faqs'],
};
