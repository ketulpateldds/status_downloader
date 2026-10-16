import { PlatformContent } from '../types';

export const twitterContent: PlatformContent = {
  slug: 'twitter',
  name: 'X (Twitter)',
  tagline: 'High-Bitrate Video & GIF Dispatch Inspector for Public X Posts',
  heroH1: 'Save Public X (Twitter) Videos, Broadcasts & Looping GIFs',
  heroSubtitle: 'Extract the highest-bitrate MP4 video streams, breaking news clips, and animated GIFs from public tweets. No Twitter login required, fully responsive, and completely private.',
  placeholderText: 'Paste public X/Twitter link (e.g., https://x.com/username/status/...)',
  accentColor: 'oklch(0.55 0.05 250)',
  acceptedLinkExamples: [
    'https://x.com/SpaceX/status/1768263729812345678',
    'https://twitter.com/NASA/status/1750000000000000000',
    'https://x.com/i/status/1780000000000000000',
  ],
  toolModes: [
    { id: 'best-video', label: 'Highest Bitrate (HD)', hint: 'Selects the top-tier m3u8 bitrate stream (up to 1080p at 60fps)' },
    { id: 'looping-gif', label: 'Animated GIF / MP4', hint: 'Converts Twitter looped video GIFs into standalone animated files' },
    { id: 'thread-media', label: 'Thread Media', hint: 'Inspects multiple media attachments within a single tweet post' },
  ],
  behaviorExplanation: {
    heading: 'How X/Twitter Encodes Video & Animated GIFs',
    description: 'X encodes video into variable bitrate HLS (HTTP Live Streaming) manifests. Tweets with animated GIFs are actually converted by X into silent, looping MP4 video files to conserve bandwidth. Dispatch extracts the true original stream and lets you save it as either a looping MP4 or a standard GIF.',
    canSave: [
      'Public video posts up to 1080p full resolution',
      'Twitter looping GIFs converted to universal MP4 or standard .gif',
      'Media clips from verified news, public organizations, and creators',
      'Multi-video attachments within a single public tweet',
    ],
    cannotSave: [
      'Protected (locked) tweets from private Twitter accounts',
      'Deleted tweets or suspended user profiles',
      'Direct Message media attachments',
      'Space live audio rooms while in-progress',
    ],
  },
  comparisonTable: [
    {
      name: 'High-Definition Video',
      availability: 'Permanent public tweet',
      supportedFormats: 'MP4 (1080p / 720p)',
      recommendedUse: 'Breaking news archival, sports highlights, tech announcements',
    },
    {
      name: 'Looping Twitter GIF',
      availability: 'Permanent public tweet',
      supportedFormats: 'MP4 (Silent Loop) / Animated GIF',
      recommendedUse: 'Meme reaction libraries, slide presentations, forum replies',
    },
    {
      name: 'Audio Commentary',
      availability: 'Permanent public tweet',
      supportedFormats: 'MP3 (192 kbps)',
      recommendedUse: 'Interview audio, podcast quotes, sound bites',
    },
    {
      name: 'Photo Stills',
      availability: 'Permanent public tweet',
      supportedFormats: 'Full-Res JPEG (Orig Size)',
      recommendedUse: 'Photography archiving, infographic reference, design inspiration',
    },
  ],
  contentCards: [
    {
      title: 'Top-Bitrate MP4 Master',
      badge: 'Up to 1080p',
      formats: ['1080p HD', '720p HD', '360p Compact'],
      honestLimitation: 'Twitter heavily compresses video. We fetch the maximum bitrate stream available in Twitter HLS manifest.',
      description: 'Preserves the sharpest frame quality available on the platform without introducing second-generation encoding artifacts.',
    },
    {
      title: 'True Looping GIF Conversion',
      badge: 'GIF / MP4',
      formats: ['Direct MP4 Loop', 'Standard .GIF'],
      honestLimitation: 'Standard .gif files are significantly larger in file size than MP4 video loops due to legacy palette encoding.',
      description: 'Convert Twitter silent video loops into standard animated GIF files for Discord, Slack, or web presentation decks.',
    },
    {
      title: 'Breaking News Clip Archival',
      badge: 'Instant Dispatch',
      formats: ['MP4 Video', 'Audio MP3'],
      honestLimitation: 'Tweets containing external article previews do not contain downloadable video files.',
      description: 'Capture eyewitness footage, official agency statements, and financial market commentary before tweets are altered.',
    },
    {
      title: 'Original Image Inspection',
      badge: 'Uncompressed Photo',
      formats: ['Orig JPEG', 'PNG'],
      honestLimitation: 'Fetches the ?name=orig asset parameter to bypass standard Twitter thumbnail downscaling.',
      description: 'Extract raw photography, charts, and architectural diagrams at their original uploaded pixel dimensions.',
    },
  ],
  useCases: [
    {
      title: 'Financial Analysts & Market Observers',
      persona: 'Market Researcher',
      description: 'Saving earnings call clips, executive announcements, and economic press briefings for compliance and report decks.',
    },
    {
      title: 'Open Source Intelligence (OSINT) Researchers',
      persona: 'Investigative Analyst',
      description: 'Preserving geotagged crisis video footage and eyewitness dispatches with verified timestamps for evidentiary documentation.',
    },
    {
      title: 'Sports Journalists & Fan Editors',
      persona: 'Sports Writer',
      description: 'Saving slow-motion replay clips and press conference reactions for post-match editorial reviews.',
    },
    {
      title: 'Community Managers & Creators',
      persona: 'Social Strategist',
      description: 'Building offline reaction GIF vaults and archiving brand mention videos for quarterly performance decks.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "Tweet is protected or from a private account"',
      cause: 'The tweet author has enabled tweet privacy (padlock icon next to username).',
      resolution: 'Dispatch cannot access private accounts. The user must make their tweets public or share the file directly with you.',
    },
    {
      problem: 'Error: "No video found in this tweet"',
      cause: 'The tweet may contain an image, a poll, or an external link preview rather than an embedded video.',
      resolution: 'Verify that the tweet contains an actual playable video or animated GIF before pasting the URL.',
    },
    {
      problem: 'URL fails when using "x.com" domain',
      cause: 'Some older web engines have incomplete DNS routing for the recent x.com domain transition.',
      resolution: 'Dispatch supports both x.com and twitter.com URLs seamlessly. Simply paste the link as copied from your address bar.',
    },
    {
      problem: 'Video resolution looks pixelated',
      cause: 'Twitter often starts streaming at 360p before buffering up to 720p or 1080p.',
      resolution: 'Dispatch automatically selects the highest available bitrate tier in the HLS manifest, ensuring you get the 1080p/720p stream.',
    },
    {
      problem: 'Audio is missing in a looping GIF',
      cause: 'By specification, Twitter GIFs are silent looped MP4 files without an audio track.',
      resolution: 'This is intended platform behavior. Twitter GIFs do not contain sound.',
    },
  ],
  faqs: [
    {
      question: 'Do I need an X (Twitter) account to download videos?',
      answer: 'No. Dispatch works completely without an account. You do not need to log in to X or connect your profile.',
    },
    {
      question: 'Can I download videos from both x.com and twitter.com links?',
      answer: 'Yes. Dispatch recognizes all valid link permutations from x.com, twitter.com, mobile share links, and status ID shortcuts.',
    },
    {
      question: 'Why are Twitter GIFs downloaded as MP4 files by default?',
      answer: 'Twitter converts all uploaded GIFs into silent MP4 videos to reduce bandwidth by up to 80%. MP4 files are smaller, smoother, and higher quality. However, Dispatch also offers a .GIF conversion button if you specifically need an image file.',
    },
    {
      question: 'How do I get the highest video quality from a Twitter post?',
      answer: 'When Dispatch inspects a tweet, it lists all available bitrate streams. Select the top option (typically 1080p or 720p at the highest bitrate) for maximum sharpness.',
    },
    {
      question: 'Can I download videos from private Twitter accounts?',
      answer: 'No. Dispatch never accesses protected tweets or password-gated streams.',
    },
    {
      question: 'Is it safe to use Dispatch on work computers?',
      answer: 'Yes. Dispatch has no tracking cookies, does not run aggressive background scripts, and serves clean direct downloads without sketchy third-party pop-under ads.',
    },
    {
      question: 'Where do downloads go on Mac and Windows?',
      answer: 'Your browser saves the file into your operating system default "Downloads" directory (C:\\Users\\...\\Downloads or /Users/.../Downloads).',
    },
    {
      question: 'Can I extract audio from a Twitter video?',
      answer: 'Yes. Every video inspection includes an MP3 audio extraction option for saving speeches, interviews, and commentary.',
    },
  ],
  closingCta: {
    heading: 'Inspect Another Public X Dispatch',
    subheading: 'Instant manifest resolution, top-bitrate MP4 streams, and zero login barriers.',
    buttonText: 'Paste X / Twitter Link',
  },
  sectionOrder: ['how-to', 'table', 'behavior', 'cards', 'use-cases', 'troubleshooting', 'faqs'],
};
