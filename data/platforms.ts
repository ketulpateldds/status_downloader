export interface ContentTypeCard {
  title: string;
  desc: string;
  badge: string;
  iconName: string;
}

export interface PlatformStep {
  step: number;
  title: string;
  desc: string;
}

export interface QualityRow {
  format: string;
  quality: string;
  resolution: string;
  note: string;
}

export interface PlatformFAQ {
  question: string;
  answer: string;
}

export interface PlatformData {
  slug: string;
  name: string;
  shortDesc: string;
  brandColor: string;
  brandGradient: string;
  iconTileBg: string;
  iconLetter: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  intro: string;
  examplePlaceholder: string;
  supportedContentTypes: ContentTypeCard[];
  steps: PlatformStep[];
  deviceTips: {
    iphone: string[];
    android: string[];
    desktop: string[];
  };
  qualityOptions: QualityRow[];
  tips: { title: string; desc: string }[];
  faqs: PlatformFAQ[];
  relatedSlugs: string[];
  isConverter?: boolean;
}

export const platformsData: Record<string, PlatformData> = {
  youtube: {
    slug: 'youtube',
    name: 'YouTube',
    shortDesc: 'Videos, Shorts, Music',
    brandColor: '#ff0000',
    brandGradient: 'from-red-600 to-rose-700',
    iconTileBg: '#ff0000',
    iconLetter: '▶',
    iconName: 'youtube',
    metaTitle: 'YouTube Video & Shorts Downloader · Dispatch',
    metaDescription: 'Download YouTube videos in 1080p, 4K, or 8K and extract audio to MP3. Free online YouTube downloader with no ads or software required.',
    heroH1: 'YouTube Video & Audio Downloader',
    intro: 'Save any public YouTube video, Short, or audio track directly to your device. Choose your favorite quality and enjoy offline playback anytime.',
    examplePlaceholder: 'Paste a YouTube video or Shorts link (e.g. https://youtu.be/...)',
    supportedContentTypes: [
      {
        title: 'Full Length Videos',
        desc: 'Save documentaries, tutorials, and music videos in resolutions up to 4K or 8K.',
        badge: 'Up to 8K Ultra HD',
        iconName: 'video',
      },
      {
        title: 'YouTube Shorts',
        desc: 'Grab short vertical clips instantly in crisp 1080p portrait quality.',
        badge: 'Shorts & Clips',
        iconName: 'smartphone',
      },
      {
        title: 'Audio & Music (MP3)',
        desc: 'Extract pristine 320 kbps MP3 soundtrack from podcasts, speeches, and songs.',
        badge: '320kbps MP3',
        iconName: 'music',
      },
      {
        title: 'Captions & Subtitles',
        desc: 'Download embedded subtitles for learning, study, and accessibility.',
        badge: 'SRT / VTT',
        iconName: 'file-text',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy the YouTube Link',
        desc: 'Open YouTube in your browser or app, tap "Share", and click "Copy Link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the link into the box above and select your desired format (e.g. 1080p or MP3).',
      },
      {
        step: 3,
        title: 'Click Download',
        desc: 'Tap the Download button. Your media will begin saving to your device in seconds.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari and paste the link into the Dispatch box.',
        'Tap Download, then confirm the prompt in Safari download manager.',
        'The video is saved inside the "Files" app under Downloads, or can be saved directly to the Photos app.',
      ],
      android: [
        'Open Google Chrome or your default mobile browser.',
        'Paste the YouTube link and tap Download.',
        'The file automatically downloads to your device "Downloads" folder and appears in your Gallery.',
      ],
      desktop: [
        'Copy the URL directly from your browser address bar (Ctrl+C / Cmd+C).',
        'Paste into Dispatch and choose high resolution 1080p, 4K, or MP3.',
        'The file downloads directly to your PC or Mac Downloads folder.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: '8K / 4K Ultra HD', resolution: '3840x2160+', note: 'Original cinematic fidelity where available' },
      { format: 'MP4', quality: '1080p Full HD', resolution: '1920x1080', note: 'Best balanced quality for phones and laptops' },
      { format: 'MP4', quality: '720p HD Standard', resolution: '1280x720', note: 'Fast download with low data consumption' },
      { format: 'MP3', quality: 'Studio Audio 320 kbps', resolution: 'Audio only', note: 'Maximum clarity for music and lectures' },
    ],
    tips: [
      {
        title: 'Age-Restricted & Private Videos',
        desc: 'Videos behind YouTube login gates or age confirmation cannot be fetched. Only public links are supported.',
      },
      {
        title: 'Live Streams',
        desc: 'Live streams can only be processed after the broadcast finishes and YouTube publishes the final recorded replay.',
      },
      {
        title: 'Long Videos',
        desc: 'Videos up to several hours (such as audiobooks and study mixes) are supported with fast processing.',
      },
    ],
    faqs: [
      {
        question: 'Can I download YouTube Shorts as normal MP4 files?',
        answer: 'Yes! YouTube Shorts download as standard MP4 files that play on any phone, tablet, or video player without watermarks.',
      },
      {
        question: 'How do I convert a YouTube video to MP3 audio only?',
        answer: 'Select the "Audio Downloader" tab or choose "MP3 (320 kbps)" from the format selector before tapping Download.',
      },
      {
        question: 'Is there a limit on how many YouTube videos I can download?',
        answer: 'No limits at all. Dispatch is completely free and unlimited for all users.',
      },
      {
        question: 'Does YouTube know that I downloaded a video?',
        answer: 'No. We do not track your activity, and downloads occur through public web requests without your account credentials.',
      },
      {
        question: 'Why does 1080p take a few extra seconds to process?',
        answer: 'YouTube stores 1080p video and audio as separate tracks. We quickly merge them into a single file so your downloaded video plays with full sound.',
      },
    ],
    relatedSlugs: ['instagram', 'tiktok', 'facebook', 'mp3'],
  },

  instagram: {
    slug: 'instagram',
    name: 'Instagram',
    shortDesc: 'Reels, Stories, Photos',
    brandColor: '#e1306c',
    brandGradient: 'from-pink-500 via-rose-500 to-purple-600',
    iconTileBg: '#e1306c',
    iconLetter: '📸',
    iconName: 'instagram',
    metaTitle: 'Instagram Downloader · Save Reels, Stories & Photos in HD · Dispatch',
    metaDescription: 'Download Instagram Reels, public Stories, Carousel posts, and HD photos in one click. 100% free with no login required.',
    heroH1: 'Instagram Reels & Video Downloader',
    intro: 'Save public Instagram Reels, videos, carousel photos, and stories in original high quality. Fast, free, and works without an Instagram login.',
    examplePlaceholder: 'Paste an Instagram link (e.g. https://www.instagram.com/reel/...)',
    supportedContentTypes: [
      {
        title: 'Instagram Reels',
        desc: 'Download high-definition vertical video reels with original sound in 1080p.',
        badge: '1080p HD Reels',
        iconName: 'film',
      },
      {
        title: 'Public Stories',
        desc: 'Save active 24-hour stories from public accounts before they disappear.',
        badge: 'Active Stories',
        iconName: 'clock',
      },
      {
        title: 'Photos & Carousels',
        desc: 'Extract full-resolution photos and multi-image swipe albums without compression.',
        badge: 'Original Photos',
        iconName: 'image',
      },
      {
        title: 'Reel Audio (MP3)',
        desc: 'Extract trending reel music and voiceovers directly into an MP3 file.',
        badge: 'Trending Audio',
        iconName: 'music',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy the Instagram Post Link',
        desc: 'Tap the three dots (•••) or Share button on the Instagram post, then tap "Copy Link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the link into the box above. We will automatically detect that it is an Instagram post.',
      },
      {
        step: 3,
        title: 'Save to Your Device',
        desc: 'Click Download to save the Reel, photo album, or audio directly to your camera roll.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari, paste the Instagram URL, and tap Download.',
        'Tap the blue Download icon in Safari address bar once finished.',
        'Tap the video, tap the share icon, and choose "Save Video" to move it into your Photos app.',
      ],
      android: [
        'Paste the link into Chrome and click Download.',
        'The Reel or photo will download directly to your gallery.',
        'You can view it immediately in Google Photos or your default Gallery app.',
      ],
      desktop: [
        'Copy the URL from your web browser tab while viewing Instagram.',
        'Paste here and tap Download.',
        'Files save to your Downloads folder ready to edit or watch offline.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: '1080p High Definition', resolution: '1080x1920', note: 'Original Instagram upload resolution' },
      { format: 'MP4', quality: '720p Mobile Video', resolution: '720x1280', note: 'Lighter file size for quick sharing' },
      { format: 'JPG', quality: 'Original Resolution', resolution: 'Up to 2048px', note: 'Lossless photo capture without Instagram compression' },
      { format: 'MP3', quality: 'Stereo Audio 320 kbps', resolution: 'Audio only', note: 'Extract reel soundtrack and viral audio' },
    ],
    tips: [
      {
        title: 'Public vs Private Accounts',
        desc: 'We can only download from public profiles. Posts from private accounts cannot be accessed.',
      },
      {
        title: 'Story Expiration',
        desc: 'Instagram stories expire after 24 hours. Be sure to download public stories while they remain live on the profile.',
      },
      {
        title: 'Carousel Albums',
        desc: 'When pasting a carousel post with multiple photos or videos, all media items will be displayed for individual download.',
      },
    ],
    faqs: [
      {
        question: 'Do I need an Instagram account or login to use this?',
        answer: 'No! You do not need to log into Instagram or give us your credentials. You only need the public link.',
      },
      {
        question: 'Will the creator be notified that I downloaded their Reel?',
        answer: 'No. Instagram does not notify creators when their public media is viewed or downloaded.',
      },
      {
        question: 'Can I download private Instagram posts or Close Friends stories?',
        answer: 'No. In respect of user privacy, Dispatch strictly processes public content available to the open web.',
      },
      {
        question: 'Can I extract the music from an Instagram Reel?',
        answer: 'Yes! Select the "Convert to MP3" tab or choose the MP3 audio download option to get the sound file.',
      },
      {
        question: 'Why did my Instagram link say "Post not found"?',
        answer: 'This usually happens if the post was deleted, the user changed their handle, or the account is set to private.',
      },
    ],
    relatedSlugs: ['tiktok', 'youtube', 'facebook', 'pinterest'],
  },

  tiktok: {
    slug: 'tiktok',
    name: 'TikTok',
    shortDesc: 'Videos, No Watermark',
    brandColor: '#000000',
    brandGradient: 'from-slate-900 to-black',
    iconTileBg: '#000000',
    iconLetter: '🎵',
    iconName: 'video',
    metaTitle: 'TikTok Video Downloader Without Watermark · Dispatch',
    metaDescription: 'Download TikTok videos without watermark in HD MP4 quality. Save TikTok sounds and slideshows easily with zero ads or registration.',
    heroH1: 'TikTok Downloader Without Watermark',
    intro: 'Download your favorite TikTok videos in clean, full HD quality without the bouncing TikTok watermark. Save original videos, photos, and trending sounds in seconds.',
    examplePlaceholder: 'Paste a TikTok link (e.g. https://www.tiktok.com/@... or vm.tiktok.com/...)',
    supportedContentTypes: [
      {
        title: 'Videos Without Watermark',
        desc: 'Get a clean, original MP4 file with zero TikTok logos or overlays.',
        badge: 'No Watermark HD',
        iconName: 'sparkles',
      },
      {
        title: 'Original Video with Watermark',
        desc: 'Prefer the original TikTok branding with creator credits? Download with watermark included.',
        badge: 'With Watermark',
        iconName: 'video',
      },
      {
        title: 'Photo Slideshows',
        desc: 'Download all high-res photos from viral TikTok photo slideshows.',
        badge: 'Photo Albums',
        iconName: 'image',
      },
      {
        title: 'TikTok Sound (MP3)',
        desc: 'Extract background sounds, trending songs, and voice clips as MP3 files.',
        badge: 'MP3 Audio',
        iconName: 'music',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy TikTok Video Link',
        desc: 'In the TikTok app, tap the Share arrow on the right side and choose "Copy Link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the link into the downloader box above. We will fetch the clean video.',
      },
      {
        step: 3,
        title: 'Choose "Without Watermark"',
        desc: 'Click Download to save the video without watermark straight to your phone or computer.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari and paste your TikTok link into Dispatch.',
        'Choose "Download Without Watermark".',
        'Once downloaded, tap the download icon in Safari, tap the video, and tap "Save Video" to store it in Photos.',
      ],
      android: [
        'Open Chrome, paste the TikTok link, and tap Download.',
        'The clean video without watermark is automatically saved to your Downloads folder.',
        'It will immediately appear in your Gallery app.',
      ],
      desktop: [
        'Copy the TikTok video URL from your browser address bar.',
        'Paste into Dispatch and click Download.',
        'Your video is saved to your computer with zero compression.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: 'HD Without Watermark', resolution: '1080x1920', note: 'Clean video stream with no TikTok logo' },
      { format: 'MP4', quality: 'Standard with Watermark', resolution: '1080x1920', note: 'Standard video with original creator handle' },
      { format: 'MP3', quality: 'TikTok Sound (320 kbps)', resolution: 'Audio only', note: 'Trending sounds and audio stems' },
      { format: 'JPG', quality: 'Slideshow Photos', resolution: 'Original', note: 'Full-resolution image gallery download' },
    ],
    tips: [
      {
        title: 'Short links (vt.tiktok.com)',
        desc: 'Both desktop links and mobile short links (vm.tiktok.com or vt.tiktok.com) are fully supported.',
      },
      {
        title: 'Watermark Removal Technology',
        desc: 'We access the original raw feed before the TikTok watermark was stamped, keeping full video clarity.',
      },
      {
        title: 'Private TikToks',
        desc: 'Videos from private TikTok accounts cannot be downloaded.',
      },
    ],
    faqs: [
      {
        question: 'Does downloading remove the TikTok watermark completely?',
        answer: 'Yes! Our tool fetches the clean source file so there are no bouncing TikTok logos or end screens.',
      },
      {
        question: 'Is it free to download TikTok videos without watermark?',
        answer: '100% free. There are no fees, subscriptions, or limits on how many videos you can save.',
      },
      {
        question: 'How do I download a TikTok photo slideshow?',
        answer: 'Paste the photo slideshow link. Dispatch will unpack each individual photo so you can save them all.',
      },
      {
        question: 'Can I download TikTok sounds as MP3s?',
        answer: 'Yes. Simply select the "Audio Downloader" tab or click the MP3 download button on the results screen.',
      },
      {
        question: 'Do I need to install any apps or browser extensions?',
        answer: 'No apps or extensions required. Everything runs directly inside your web browser on mobile or PC.',
      },
    ],
    relatedSlugs: ['instagram', 'youtube', 'facebook', 'twitter'],
  },

  facebook: {
    slug: 'facebook',
    name: 'Facebook',
    shortDesc: 'Videos, Reels, Photos',
    brandColor: '#1877f2',
    brandGradient: 'from-blue-600 to-indigo-700',
    iconTileBg: '#1877f2',
    iconLetter: 'f',
    iconName: 'facebook',
    metaTitle: 'Facebook Video Downloader · Save FB Reels & Watch Videos in HD · Dispatch',
    metaDescription: 'Download Facebook videos, Reels, and Watch clips in 1080p HD or SD. Fast, free online Facebook video downloader with no account needed.',
    heroH1: 'Facebook Video & Reels Downloader',
    intro: 'Download public Facebook videos, Reels, live show recordings, and Watch episodes in high definition. Enjoy smooth offline playback on any device.',
    examplePlaceholder: 'Paste a Facebook video or Reel link (e.g. https://www.facebook.com/watch/...)',
    supportedContentTypes: [
      {
        title: 'Facebook Reels',
        desc: 'Save short vertical Reels in high definition with clear sound.',
        badge: '1080p HD Reels',
        iconName: 'film',
      },
      {
        title: 'Watch & Newsfeed Videos',
        desc: 'Download viral clips, cooking shows, tutorials, and interviews.',
        badge: 'HD & SD MP4',
        iconName: 'video',
      },
      {
        title: 'Public Group Videos',
        desc: 'Save videos shared inside open, public Facebook groups.',
        badge: 'Public Groups',
        iconName: 'users',
      },
      {
        title: 'Audio Extraction',
        desc: 'Convert any Facebook speech or song into a portable MP3 file.',
        badge: 'MP3 Audio',
        iconName: 'music',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy Facebook Video Link',
        desc: 'Click the Share button below the Facebook video and tap "Copy Link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the URL into the search box above. We will fetch all available quality versions.',
      },
      {
        step: 3,
        title: 'Save to Device',
        desc: 'Select HD 1080p or SD and click Download to save the video file.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari and paste the Facebook video URL into Dispatch.',
        'Tap Download and choose HD quality.',
        'Save the file into your Files app or export to Photos.',
      ],
      android: [
        'In Facebook app, tap Share > More Options > Copy Link.',
        'Open Chrome, paste the link into Dispatch, and click Download.',
        'The video saves directly to your device storage.',
      ],
      desktop: [
        'Right-click the video on Facebook and select "Copy video URL at current time" or copy from address bar.',
        'Paste into Dispatch and click Download.',
        'Save to your preferred desktop folder.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: 'HD 1080p High Definition', resolution: '1920x1080', note: 'Crisp picture quality for large screens' },
      { format: 'MP4', quality: 'SD 720p Standard', resolution: '1280x720', note: 'Standard quality for fast downloads' },
      { format: 'MP4', quality: 'Mobile 480p', resolution: '854x480', note: 'Small file size for quick messaging' },
      { format: 'MP3', quality: 'High Quality MP3', resolution: 'Audio only', note: 'Extract speech, talk shows, and music' },
    ],
    tips: [
      {
        title: 'Closed / Secret Groups',
        desc: 'Videos in closed or secret groups cannot be downloaded because they require private member authorization.',
      },
      {
        title: 'fb.watch short links',
        desc: 'Both full facebook.com URLs and mobile fb.watch short links work seamlessly.',
      },
      {
        title: 'Facebook Live',
        desc: 'Live broadcasts can be saved once the creator concludes the live session and saves it as a regular video post.',
      },
    ],
    faqs: [
      {
        question: 'Can I download private Facebook videos or friends-only posts?',
        answer: 'No. To protect personal privacy, Dispatch only downloads public posts viewable by everyone on the internet.',
      },
      {
        question: 'Is there a limit on Facebook video file sizes?',
        answer: 'No limit. You can download long Facebook videos, lectures, and documentaries without restrictions.',
      },
      {
        question: 'Does this work on Facebook Reels?',
        answer: 'Yes! Facebook Reels are fully supported in HD quality with clear audio.',
      },
      {
        question: 'How do I download on iPhone without an extra app?',
        answer: 'Simply paste the link into Safari, tap Download, and Safari built-in download manager will save it to your Files app.',
      },
      {
        question: 'Do I need to sign in to my Facebook account?',
        answer: 'Never. Dispatch never asks for your Facebook credentials or password.',
      },
    ],
    relatedSlugs: ['instagram', 'youtube', 'tiktok', 'twitter'],
  },

  twitter: {
    slug: 'twitter',
    name: 'X (Twitter)',
    shortDesc: 'Videos, GIFs, Images',
    brandColor: '#0f1419',
    brandGradient: 'from-gray-900 to-black',
    iconTileBg: '#0f1419',
    iconLetter: '𝕏',
    iconName: 'twitter',
    metaTitle: 'X (Twitter) Video Downloader · Save HD Video, GIFs & Threads · Dispatch',
    metaDescription: 'Download Twitter (X) videos and GIFs in 1080p, 720p MP4. Free online X video downloader with fast processing and zero tracking.',
    heroH1: 'X (Twitter) Video & GIF Downloader',
    intro: 'Download public videos, animated GIFs, and media attachments from posts on X (formerly Twitter) in high definition with one click.',
    examplePlaceholder: 'Paste an X (Twitter) post link (e.g. https://x.com/.../status/...)',
    supportedContentTypes: [
      {
        title: 'HD Videos',
        desc: 'Save news clips, interviews, and viral posts in up to 1080p resolution.',
        badge: '1080p HD Video',
        iconName: 'video',
      },
      {
        title: 'Twitter GIFs (as MP4)',
        desc: 'Download Twitter animated GIFs converted into smooth, high-compatibility MP4 files.',
        badge: 'Looping GIFs',
        iconName: 'image',
      },
      {
        title: 'High-Res Photos',
        desc: 'Extract original 4K photo attachments from photographer threads.',
        badge: 'Lossless Photos',
        iconName: 'camera',
      },
      {
        title: 'Audio Snippets',
        desc: 'Extract speech, space recordings, and interview sound as MP3.',
        badge: 'MP3 Audio',
        iconName: 'mic',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy X (Twitter) Link',
        desc: 'Tap the Share icon under the post on X and select "Copy link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the link into the box above. We support both x.com and twitter.com links.',
      },
      {
        step: 3,
        title: 'Download Video or GIF',
        desc: 'Select your preferred resolution and click Download to save the file.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari, paste the tweet link into Dispatch, and click Download.',
        'Select your quality tier (1080p or 720p).',
        'Save the file into your Photos app via the Safari download sheet.',
      ],
      android: [
        'In the X app, tap Share > Copy Link.',
        'Open Chrome, paste into Dispatch, and tap Download.',
        'The MP4 or GIF is saved directly to your phone gallery.',
      ],
      desktop: [
        'Copy the tweet link from your browser address bar.',
        'Paste into Dispatch and choose high-definition MP4.',
        'Download directly to your computer folder.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: '1080p High Definition', resolution: '1920x1080', note: 'Highest available bitrate stream on X' },
      { format: 'MP4', quality: '720p HD Standard', resolution: '1280x720', note: 'Great quality for quick viewing and messaging' },
      { format: 'MP4', quality: '480p SD Mobile', resolution: '854x480', note: 'Fast download with minimal data usage' },
      { format: 'MP3', quality: 'Audio Extract', resolution: 'Audio only', note: 'Speech and interviews saved as MP3' },
    ],
    tips: [
      {
        title: 'Protected Tweets',
        desc: 'Tweets from private or protected accounts cannot be downloaded.',
      },
      {
        title: 'Twitter GIFs are actually MP4s',
        desc: 'Twitter converts uploaded GIFs into MP4 video loops. We provide high-compatibility MP4 files that loop seamlessly on any player.',
      },
      {
        title: 'x.com vs twitter.com',
        desc: 'Both domain formats are automatically recognized and resolved instantly.',
      },
    ],
    faqs: [
      {
        question: 'Does this work for both x.com and twitter.com URLs?',
        answer: 'Yes! Both older twitter.com and new x.com URLs work interchangeably.',
      },
      {
        question: 'Why are Twitter GIFs downloaded as MP4 video files?',
        answer: 'Twitter stores GIFs as lightweight MP4 videos. Downloading as MP4 preserves smooth 60fps motion while saving 80% file size compared to old GIF formats.',
      },
      {
        question: 'Can I download videos from private Twitter accounts?',
        answer: 'No. We strictly support public tweets that are visible without logging in.',
      },
      {
        question: 'How do I download a video from a Twitter thread?',
        answer: 'Copy the link of the specific tweet within the thread containing the video, and paste it into Dispatch.',
      },
      {
        question: 'Is Dispatch safe to use for Twitter downloads?',
        answer: 'Yes, 100% safe. We never ask for your Twitter login, we do not inject ads, and we never track your downloads.',
      },
    ],
    relatedSlugs: ['youtube', 'instagram', 'tiktok', 'facebook'],
  },

  pinterest: {
    slug: 'pinterest',
    name: 'Pinterest',
    shortDesc: 'Videos, Images, Ideas',
    brandColor: '#e60023',
    brandGradient: 'from-red-600 to-rose-700',
    iconTileBg: '#e60023',
    iconLetter: 'P',
    iconName: 'pinterest',
    metaTitle: 'Pinterest Video & Image Downloader · Save Idea Pins & HD Photos · Dispatch',
    metaDescription: 'Download Pinterest videos, Idea Pins, GIFs, and original high-resolution photos for free. Fast online Pinterest downloader with no sign-in.',
    heroH1: 'Pinterest Video & Photo Downloader',
    intro: 'Save inspirational Pinterest videos, Idea Pins, DIY tutorials, and full-resolution aesthetic photography directly to your collection.',
    examplePlaceholder: 'Paste a Pinterest pin link (e.g. https://pinterest.com/pin/... or pin.it/...)',
    supportedContentTypes: [
      {
        title: 'Video Pins',
        desc: 'Save DIY crafts, recipes, home decor, and fashion video pins in crisp 1080p.',
        badge: '1080p Video Pins',
        iconName: 'video',
      },
      {
        title: 'Idea Pins',
        desc: 'Download multi-page Idea Pins with complete animations and music.',
        badge: 'Idea Pins',
        iconName: 'layers',
      },
      {
        title: 'Original-Size Photos',
        desc: 'Download maximum-resolution wallpapers and aesthetic design specimens.',
        badge: 'Full Resolution',
        iconName: 'image',
      },
      {
        title: 'Animated GIFs',
        desc: 'Save aesthetic animated pins and motion graphics in high quality.',
        badge: 'GIF / MP4',
        iconName: 'sparkles',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy the Pin Link',
        desc: 'On the Pinterest pin, tap the Share icon and click "Copy Link".',
      },
      {
        step: 2,
        title: 'Paste into Dispatch',
        desc: 'Paste the pin.it or pinterest.com link into the downloader above.',
      },
      {
        step: 3,
        title: 'Save Full-Res File',
        desc: 'Choose your desired video resolution or full-size image and tap Download.',
      },
    ],
    deviceTips: {
      iphone: [
        'Open Safari, paste the Pinterest link, and tap Download.',
        'Tap the downloaded item and save it directly into Photos or Files.',
      ],
      android: [
        'Paste into Chrome and tap Download.',
        'The video or image is saved to your gallery Downloads album.',
      ],
      desktop: [
        'Copy the URL from your browser address bar and paste into Dispatch.',
        'Save the original-resolution asset to your hard drive.',
      ],
    },
    qualityOptions: [
      { format: 'MP4', quality: '1080p High Definition', resolution: '1080x1920', note: 'Original vertical video pin clarity' },
      { format: 'MP4', quality: '720p HD Standard', resolution: '720x1280', note: 'Fast download for recipe and craft clips' },
      { format: 'JPG', quality: 'Original Specimen', resolution: 'Lossless', note: 'Original uploaded master image without blur' },
      { format: 'MP3', quality: 'Soundtrack Extract', resolution: 'Audio only', note: 'Extract background songs from video pins' },
    ],
    tips: [
      {
        title: 'pin.it Short Links',
        desc: 'Short mobile sharing links starting with pin.it are fully supported.',
      },
      {
        title: 'Full Original Resolution',
        desc: 'Pinterest often shows thumbnails in the feed. Our tool automatically finds the full-size master image.',
      },
      {
        title: 'Secret Boards',
        desc: 'Pins stored on private or secret boards cannot be accessed.',
      },
    ],
    faqs: [
      {
        question: 'Does this download Pinterest videos or only images?',
        answer: 'Both! You can download video pins, Idea Pins, animated GIFs, and high-resolution still photos.',
      },
      {
        question: 'How do I download the highest quality image from Pinterest?',
        answer: 'Paste the pin link. Dispatch queries the source file to download the original uncompressed image.',
      },
      {
        question: 'Can I download pins from a secret board?',
        answer: 'No. Secret boards are protected by Pinterest credentials and cannot be accessed by external tools.',
      },
      {
        question: 'Do pin.it links from the Pinterest app work?',
        answer: 'Yes! Just tap Share > Copy Link inside the Pinterest app and paste the pin.it link directly.',
      },
      {
        question: 'Is it free to download from Pinterest?',
        answer: 'Yes, 100% free with unlimited downloads.',
      },
    ],
    relatedSlugs: ['instagram', 'tiktok', 'youtube'],
  },

  spotify: {
    slug: 'spotify',
    name: 'Spotify',
    shortDesc: 'Songs, Tracks & Albums',
    brandColor: '#1db954',
    brandGradient: 'from-emerald-500 to-green-600',
    iconTileBg: '#1db954',
    iconLetter: '♫',
    iconName: 'music',
    metaTitle: 'Spotify Music Downloader · Download MP3 Songs · Dispatch',
    metaDescription: 'Download Spotify songs, albums, and playlists in 320kbps MP3 audio with original metadata and cover art.',
    heroH1: 'Spotify Music & MP3 Downloader',
    intro: 'Save your favorite Spotify songs directly in 320kbps MP3 audio format with crystal-clear studio sound quality.',
    examplePlaceholder: 'Paste a Spotify song or album link (e.g. https://open.spotify.com/track/...)',
    supportedContentTypes: [
      {
        title: 'Songs & Tracks',
        desc: 'Save individual Spotify tracks directly to 320kbps stereo MP3.',
        badge: '320kbps MP3',
        iconName: 'music',
      },
      {
        title: 'Album Tracks',
        desc: 'Extract full-fidelity audio stems and album songs.',
        badge: 'Studio Audio',
        iconName: 'disc',
      },
      {
        title: 'High-Res Artwork',
        desc: 'Save official high-resolution album cover artwork.',
        badge: 'HD Cover',
        iconName: 'image',
      },
    ],
    steps: [
      { step: 1, title: 'Copy Spotify Link', desc: 'In Spotify, click the 3 dots on any song, tap Share, and select "Copy Link".' },
      { step: 2, title: 'Paste into Dispatch', desc: 'Paste the Spotify link into the search box above.' },
      { step: 3, title: 'Download MP3', desc: 'Click Download to save the 320kbps MP3 track directly to your device.' },
    ],
    deviceTips: {
      iphone: ['Paste the Spotify song link in Safari and tap Download to save to Files or Apple Music.'],
      android: ['Paste the URL in Chrome and tap Download to save directly to your phone audio storage.'],
      desktop: ['Download high-bitrate MP3 files directly to your music library.'],
    },
    qualityOptions: [
      { format: 'MP3', quality: '320kbps Extreme Quality', resolution: 'Stereo Audio', note: 'Highest fidelity studio master MP3' },
      { format: 'MP3', quality: '192kbps Standard Quality', resolution: 'Stereo Audio', note: 'Balanced size for mobile listening' },
      { format: 'JPG', quality: 'Original Album Artwork', resolution: 'HD Cover Art', note: 'Official cover art file' },
    ],
    tips: [
      { title: 'Track URLs', desc: 'Both open.spotify.com/track/... and spotify.link/... URLs are supported.' },
      { title: 'Metadata Preserved', desc: 'Downloaded MP3s include title, artist, and album tag information.' },
      { title: 'No Account Required', desc: 'You do not need a Spotify Premium subscription to download public songs.' },
    ],
    faqs: [
      { question: 'Do I need Spotify Premium to use this downloader?', answer: 'No. You can download public Spotify tracks for free without Premium.' },
      { question: 'What audio format are songs downloaded in?', answer: 'Tracks are downloaded in universal 320kbps MP3 format compatible with all players.' },
    ],
    relatedSlugs: ['soundcloud', 'youtube', 'tiktok'],
  },

  soundcloud: {
    slug: 'soundcloud',
    name: 'SoundCloud',
    shortDesc: 'Tracks, Sets & DJ Mixes',
    brandColor: '#ff5500',
    brandGradient: 'from-orange-500 to-amber-600',
    iconTileBg: '#ff5500',
    iconLetter: '☁',
    iconName: 'cloud',
    metaTitle: 'SoundCloud Music Downloader · Save MP3 Audio & Tracks · Dispatch',
    metaDescription: 'Download SoundCloud songs and DJ sets directly in high quality 320kbps MP3 format with album artwork.',
    heroH1: 'SoundCloud Music & Audio Downloader',
    intro: 'Download high quality MP3 tracks and DJ mixes from SoundCloud directly to your phone or computer with no limits.',
    examplePlaceholder: 'Paste a SoundCloud track link (e.g. https://soundcloud.com/...)',
    supportedContentTypes: [
      {
        title: 'Original Audio Tracks',
        desc: 'Save indie tracks, remixes, and podcasts directly in MP3 format.',
        badge: 'HQ Audio',
        iconName: 'music',
      },
      {
        title: 'DJ Sets & Mixes',
        desc: 'Download long-duration DJ sets and live recordings effortlessly.',
        badge: 'Long-Form',
        iconName: 'headphones',
      },
      {
        title: 'Cover Artwork',
        desc: 'Download high-definition track artwork and banners.',
        badge: 'HD Cover',
        iconName: 'image',
      },
    ],
    steps: [
      { step: 1, title: 'Copy Track Link', desc: 'Click Share on any SoundCloud track or set and copy the link.' },
      { step: 2, title: 'Paste into Dispatch', desc: 'Paste the SoundCloud URL into the input field above.' },
      { step: 3, title: 'Download MP3', desc: 'Click Download to receive your high-quality MP3 audio track.' },
    ],
    deviceTips: {
      iphone: ['Open Safari, paste the SoundCloud URL, and tap Download.'],
      android: ['Paste the URL in Google Chrome and tap Download.'],
      desktop: ['Download full tracks and DJ sets straight to your computer.'],
    },
    qualityOptions: [
      { format: 'MP3', quality: '320kbps High Quality', resolution: 'Full Audio', note: 'Clean stereo sound' },
      { format: 'MP3', quality: '128kbps Standard', resolution: 'Light File', note: 'Fast download' },
    ],
    tips: [
      { title: 'Public Tracks Only', desc: 'Private tracks requiring secret tokens cannot be downloaded.' },
      { title: 'Podcast Downloads', desc: 'Extended length podcasts and sets are fully supported.' },
    ],
    faqs: [
      { question: 'Is downloading SoundCloud music free?', answer: 'Yes, 100% free with unlimited track conversions.' },
    ],
    relatedSlugs: ['spotify', 'youtube', 'tiktok'],
  },

  capcut: {
    slug: 'capcut',
    name: 'CapCut',
    shortDesc: 'Templates & Video Edits',
    brandColor: '#000000',
    brandGradient: 'from-slate-800 to-black',
    iconTileBg: '#000000',
    iconLetter: '✂',
    iconName: 'scissors',
    metaTitle: 'CapCut Template Video Downloader · No Watermark · Dispatch',
    metaDescription: 'Download CapCut video templates in HD MP4 without watermark. Free fast online CapCut downloader.',
    heroH1: 'CapCut Video Template Downloader',
    intro: 'Save viral CapCut templates and video edits in crystal-clear HD MP4 quality with no watermark.',
    examplePlaceholder: 'Paste a CapCut template link (e.g. https://www.capcut.com/template-detail/...)',
    supportedContentTypes: [
      {
        title: 'Template Videos',
        desc: 'Save popular template preview clips without the CapCut logo watermark.',
        badge: 'No Watermark',
        iconName: 'video',
      },
      {
        title: 'Template Music',
        desc: 'Extract trending audio and viral sounds used in CapCut edits.',
        badge: 'MP3 Sound',
        iconName: 'music',
      },
    ],
    steps: [
      { step: 1, title: 'Copy Template Link', desc: 'Open CapCut or TikTok, tap Share on the template, and copy link.' },
      { step: 2, title: 'Paste into Dispatch', desc: 'Paste the CapCut link into the search box above.' },
      { step: 3, title: 'Save Video', desc: 'Tap Download to save the clean MP4 video.' },
    ],
    deviceTips: {
      iphone: ['Save directly into your iPhone Photos roll.'],
      android: ['Downloads directly to your Gallery or Files folder.'],
      desktop: ['Download full HD template videos.'],
    },
    qualityOptions: [
      { format: 'MP4', quality: '1080p Full HD', resolution: '1080x1920', note: 'Clean video with no watermark' },
      { format: 'MP3', quality: 'Original Sound', resolution: 'Audio only', note: 'Trending soundtrack extract' },
    ],
    tips: [
      { title: 'No Watermark', desc: 'All CapCut template videos are downloaded without the end card or logo.' },
    ],
    faqs: [
      { question: 'Is CapCut video download free?', answer: 'Yes, 100% free with no watermark added.' },
    ],
    relatedSlugs: ['tiktok', 'instagram', 'youtube'],
  },

  threads: {
    slug: 'threads',
    name: 'Threads',
    shortDesc: 'Videos, Posts & Photos',
    brandColor: '#101010',
    brandGradient: 'from-neutral-800 to-black',
    iconTileBg: '#101010',
    iconLetter: '@',
    iconName: 'at-sign',
    metaTitle: 'Threads Video & Photo Downloader · Dispatch',
    metaDescription: 'Download Threads videos and images in full resolution. Free online Instagram Threads post downloader.',
    heroH1: 'Threads Video & Photo Downloader',
    intro: 'Download high-definition videos, photos, and media threads from Instagram Threads with one click.',
    examplePlaceholder: 'Paste a Threads post link (e.g. https://www.threads.net/@.../post/...)',
    supportedContentTypes: [
      {
        title: 'Threads Videos',
        desc: 'Save vertical videos and clips shared on Threads in HD MP4.',
        badge: 'HD Video',
        iconName: 'video',
      },
      {
        title: 'Photos & Carousels',
        desc: 'Download full-resolution pictures and thread images.',
        badge: 'Original Photo',
        iconName: 'image',
      },
    ],
    steps: [
      { step: 1, title: 'Copy Post Link', desc: 'In Threads, tap the Paper Airplane / Share icon on the post and choose "Copy Link".' },
      { step: 2, title: 'Paste into Dispatch', desc: 'Paste the link into the search field above.' },
      { step: 3, title: 'Download Media', desc: 'Click Download to save the video or image.' },
    ],
    deviceTips: {
      iphone: ['Save directly into Photos via Safari.'],
      android: ['Saves to your device Downloads folder.'],
      desktop: ['Download original resolution files to your desktop.'],
    },
    qualityOptions: [
      { format: 'MP4', quality: '1080p HD Video', resolution: 'High Definition', note: 'Original video format' },
      { format: 'JPG', quality: 'Original Photo', resolution: 'Full Resolution', note: 'Uncompressed image' },
    ],
    tips: [
      { title: 'Public Threads Only', desc: 'Posts from private Threads profiles cannot be extracted.' },
    ],
    faqs: [
      { question: 'Can I download Threads videos?', answer: 'Yes, paste any public Threads post URL to save its video or image.' },
    ],
    relatedSlugs: ['instagram', 'twitter', 'facebook'],
  },

  mp3: {
    slug: 'mp3',
    name: 'Video to MP3',
    shortDesc: 'Convert to 320 kbps MP3',
    brandColor: '#ec4a7b',
    brandGradient: 'from-pink-500 to-rose-600',
    iconTileBg: '#ec4a7b',
    iconLetter: '🎵',
    iconName: 'music',
    metaTitle: 'Free Video to MP3 Converter · Extract High-Quality Audio Online · Dispatch',
    metaDescription: 'Extract 320 kbps MP3 audio from any video link. Free online Video to MP3 converter for YouTube, TikTok, Instagram, and more.',
    heroH1: 'Online Video to MP3 Converter',
    intro: 'Turn any online video into high-quality MP3 music or podcast audio in seconds. 100% free, studio-grade 320 kbps sound with no registration.',
    examplePlaceholder: 'Paste a video link from YouTube, TikTok, Instagram, Facebook...',
    supportedContentTypes: [
      {
        title: 'Studio Quality 320 kbps',
        desc: 'Maximum bit-depth MP3 audio for music lovers, audiophiles, and studio monitors.',
        badge: '320 kbps CBR',
        iconName: 'headphones',
      },
      {
        title: 'Balanced 192 kbps',
        desc: 'Optimal balance of crystal-clear sound and compact file size for portable listening.',
        badge: '192 kbps Standard',
        iconName: 'music',
      },
      {
        title: 'Voice & Speech 128 kbps',
        desc: 'Lightweight audio files ideal for lectures, audiobooks, and interviews.',
        badge: 'Speech Optimized',
        iconName: 'mic',
      },
      {
        title: 'M4A / AAC Audio',
        desc: 'Native Apple format for seamless playback on iPhone, iPad, and Mac.',
        badge: 'Apple AAC / M4A',
        iconName: 'smartphone',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Copy Any Video Link',
        desc: 'Copy the link of any video you want to convert from YouTube, TikTok, Instagram, Facebook, or X.',
      },
      {
        step: 2,
        title: 'Paste into Converter',
        desc: 'Paste the link into the box above. The format is automatically set to MP3 audio.',
      },
      {
        step: 3,
        title: 'Download Your MP3',
        desc: 'Tap Download to extract the audio track and save the MP3 directly to your music library.',
      },
    ],
    deviceTips: {
      iphone: [
        'Paste the video link in Safari and tap Download.',
        'The MP3 file saves into your Files app, where you can play it immediately or share it with music players.',
      ],
      android: [
        'Paste the link into Chrome and tap Download.',
        'The MP3 saves to your device Music or Downloads folder, ready for Spotify, YouTube Music, or Samsung Music.',
      ],
      desktop: [
        'Download the 320 kbps MP3 file straight to your music folder on Windows, Mac, or Linux.',
      ],
    },
    qualityOptions: [
      { format: 'MP3', quality: 'Studio Master 320 kbps', resolution: '44.1 kHz Stereo', note: 'Crisp high frequencies and rich bass' },
      { format: 'MP3', quality: 'Standard 192 kbps', resolution: '44.1 kHz Stereo', note: 'Great for everyday headphones and car audio' },
      { format: 'M4A', quality: 'Lossless Container', resolution: 'Original Bitrate', note: 'Native playback on Apple devices' },
      { format: 'WAV', quality: 'Uncompressed Audio', resolution: 'PCM Audio', note: 'For editing in Audacity or digital audio workstations' },
    ],
    tips: [
      {
        title: 'Original Audio Extraction',
        desc: 'We extract the audio directly from the source video stream without degrading it through multiple re-compression passes.',
      },
      {
        title: 'Full Songs & Long Podcasts',
        desc: 'From short 15-second viral soundbites to 3-hour long podcast interviews, all lengths are supported.',
      },
      {
        title: 'ID3 Tags Ready',
        desc: 'Downloaded MP3s include proper artist and title metadata so your music player displays the correct track information.',
      },
    ],
    faqs: [
      {
        question: 'Can I convert any video link to MP3?',
        answer: 'Yes! You can paste links from YouTube, Instagram, TikTok, Facebook, Twitter, and supported platforms.',
      },
      {
        question: 'What is the highest MP3 quality available?',
        answer: 'We provide studio-grade 320 kbps MP3, which is the highest possible standard for MP3 audio files.',
      },
      {
        question: 'Can I play the MP3 on my iPhone or Android?',
        answer: 'Yes. MP3 is universal and plays natively on every iPhone, iPad, Android phone, computer, and smart speaker.',
      },
      {
        question: 'Do I have to pay or register to convert to MP3?',
        answer: 'No! It is 100% free with no registration, no subscription, and no watermarks.',
      },
      {
        question: 'How long does an audio conversion take?',
        answer: 'Most videos are converted and ready for download within 3 to 5 seconds.',
      },
    ],
    relatedSlugs: ['youtube', 'tiktok', 'instagram', 'facebook'],
  },

  'video-to-mp3': {
    slug: 'video-to-mp3',
    name: 'Video to MP3 Converter',
    shortDesc: 'Extract audio from any video',
    brandColor: '#ec4a7b',
    brandGradient: 'from-pink-500 to-rose-600',
    iconTileBg: '#ec4a7b',
    iconLetter: '🎵',
    iconName: 'music',
    metaTitle: 'Video to MP3 Converter · Extract High-Bitrate MP3 Free · Dispatch',
    metaDescription: 'Extract pristine 320kbps MP3 audio from any video link. Free online audio converter for all platforms with no limits.',
    heroH1: 'Video to MP3 Audio Converter',
    intro: 'Extract studio-grade MP3 audio from any online video in seconds. Works with YouTube, TikTok, Instagram, and more.',
    examplePlaceholder: 'Paste any video link to convert to MP3...',
    supportedContentTypes: [
      { title: 'MP3 320 kbps', desc: 'Maximum fidelity audio stream for crisp music playback.', badge: '320 kbps', iconName: 'headphones' },
      { title: 'MP3 192 kbps', desc: 'Balanced file size and high clarity for everyday listening.', badge: '192 kbps', iconName: 'music' },
      { title: 'M4A Audio', desc: 'Native audio container for Apple devices.', badge: 'M4A', iconName: 'smartphone' },
      { title: 'WAV Lossless', desc: 'Uncompressed audio format for sound editors.', badge: 'WAV', iconName: 'mic' },
    ],
    steps: [
      { step: 1, title: 'Paste Video Link', desc: 'Copy the URL of the video you want to convert and paste it above.' },
      { step: 2, title: 'Choose Audio Quality', desc: 'Select 320 kbps MP3 for best quality or 192 kbps for lighter files.' },
      { step: 3, title: 'Download MP3', desc: 'Click Download to save the audio file directly to your device.' },
    ],
    deviceTips: {
      iphone: ['Paste link in Safari, tap Download, and access the MP3 file in Files app.'],
      android: ['Paste link in Chrome, tap Download, and the MP3 saves to your music folder.'],
      desktop: ['Download directly to your computer music library.'],
    },
    qualityOptions: [
      { format: 'MP3', quality: '320 kbps Studio Master', resolution: 'Audio only', note: 'Top audio fidelity' },
      { format: 'MP3', quality: '192 kbps Standard', resolution: 'Audio only', note: 'Balanced size' },
      { format: 'M4A', quality: 'AAC Original', resolution: 'Audio only', note: 'Apple devices' },
    ],
    tips: [
      { title: 'Supported Sites', desc: 'Works with YouTube, TikTok, Instagram, Facebook, X, and more.' },
      { title: 'No Loss', desc: 'Direct stream extraction without multiple lossy conversions.' },
      { title: 'Fast', desc: 'Converts in under 5 seconds.' },
    ],
    faqs: [
      { question: 'Is this Video to MP3 tool free?', answer: 'Yes, 100% free with unlimited conversions.' },
      { question: 'What sites can I convert from?', answer: 'You can convert videos from YouTube, TikTok, Instagram, Facebook, and more.' },
      { question: 'Can I listen offline on iPhone?', answer: 'Yes! Download the MP3 in Safari and play it anytime in Files or your favorite music player.' },
      { question: 'What bitrate is used?', answer: 'We support up to 320 kbps CBR, the highest quality possible for MP3.' },
      { question: 'Do you store my downloaded music?', answer: 'Never. We do not store or keep copies of any converted files.' },
    ],
    relatedSlugs: ['youtube', 'tiktok', 'instagram', 'video-to-mp4'],
    isConverter: true,
  },

  'video-to-mp4': {
    slug: 'video-to-mp4',
    name: 'Video to MP4 Converter',
    shortDesc: 'Convert to MP4 format',
    brandColor: '#2b8de8',
    brandGradient: 'from-blue-500 to-indigo-600',
    iconTileBg: '#2b8de8',
    iconLetter: '🎬',
    iconName: 'video',
    metaTitle: 'Video to MP4 Converter · Convert Any Video to MP4 Online · Dispatch',
    metaDescription: 'Convert any online video or stream to standard MP4 format. Plays on any phone, tablet, and computer in 1080p, 4K.',
    heroH1: 'Online Video to MP4 Converter',
    intro: 'Convert videos from any site into universally compatible MP4 files that play on every phone, tablet, smart TV, and computer.',
    examplePlaceholder: 'Paste any video link to convert to MP4...',
    supportedContentTypes: [
      { title: 'Full HD 1080p', desc: 'Crisp 1080p MP4 with high-definition audio.', badge: '1080p HD', iconName: 'video' },
      { title: '4K Ultra HD', desc: 'Ultra-high resolution for cinema displays and large TVs.', badge: '4K UHD', iconName: 'film' },
      { title: 'Mobile 720p', desc: 'Optimized file size for fast sharing and messaging.', badge: '720p SD', iconName: 'smartphone' },
      { title: 'Universal Codec', desc: 'Encoded in standard H.264/AAC for 100% device compatibility.', badge: 'Universal H.264', iconName: 'check' },
    ],
    steps: [
      { step: 1, title: 'Paste the Video Link', desc: 'Copy the URL of any web video and paste it in the box above.' },
      { step: 2, title: 'Select Resolution', desc: 'Pick 1080p Full HD, 4K, or 720p according to your preference.' },
      { step: 3, title: 'Download MP4', desc: 'Click Download to save the universal MP4 file to your device.' },
    ],
    deviceTips: {
      iphone: ['Downloads in Safari and saves straight to your Photos or Files app.'],
      android: ['Saves directly to your phone Gallery and Downloads folder.'],
      desktop: ['Download to your PC or Mac ready to play in any media player.'],
    },
    qualityOptions: [
      { format: 'MP4', quality: '4K Ultra HD', resolution: '3840x2160', note: 'Original cinema resolution' },
      { format: 'MP4', quality: '1080p Full HD', resolution: '1920x1080', note: 'Universal standard' },
      { format: 'MP4', quality: '720p HD', resolution: '1280x720', note: 'Lighter file size' },
    ],
    tips: [
      { title: 'Universal Playback', desc: 'MP4 is the world standard video format and plays anywhere without special apps.' },
      { title: 'High Bitrate', desc: 'Keeps colors vivid and motion smooth.' },
      { title: 'Free & Safe', desc: 'No software installation, watermarks, or tracking.' },
    ],
    faqs: [
      { question: 'Why convert to MP4?', answer: 'MP4 is supported by virtually every phone, computer, TV, and editing software in the world.' },
      { question: 'Will the converted video have sound?', answer: 'Yes! All MP4 conversions include the full stereo audio track.' },
      { question: 'Is there a limit on video length?', answer: 'No limit. Long videos, tutorials, and speeches can all be converted.' },
      { question: 'Can I play the MP4 on iPhone?', answer: 'Yes. MP4 is natively supported on iOS, Android, macOS, and Windows.' },
      { question: 'Is it completely free?', answer: 'Yes, 100% free with no hidden charges.' },
    ],
    relatedSlugs: ['video-to-mp3', 'youtube', 'compress-video'],
    isConverter: true,
  },

  'image-converter': {
    slug: 'image-converter',
    name: 'Image Converter',
    shortDesc: 'Convert JPG, PNG, WebP',
    brandColor: '#8b5cf6',
    brandGradient: 'from-purple-500 to-indigo-600',
    iconTileBg: '#8b5cf6',
    iconLetter: '🖼️',
    iconName: 'image',
    metaTitle: 'Free Online Image Converter · Convert JPG, PNG, WebP Online · Dispatch',
    metaDescription: 'Convert images to JPG, PNG, WebP, and GIF for free. Fast, high-quality online image converter with no file limits.',
    heroH1: 'Online Image Format Converter',
    intro: 'Convert photos and images between JPG, PNG, and WebP in seconds. Maintain original high resolution with zero loss in visual clarity.',
    examplePlaceholder: 'Paste an image link or photo URL to convert...',
    supportedContentTypes: [
      { title: 'Convert to JPG', desc: 'Best for photographs, social media posts, and compact sharing.', badge: 'Universal JPG', iconName: 'image' },
      { title: 'Convert to PNG', desc: 'Lossless format preserving crisp graphics and transparent backgrounds.', badge: 'Transparent PNG', iconName: 'layers' },
      { title: 'Convert to WebP', desc: 'Modern web image format that saves up to 40% file size.', badge: 'Modern WebP', iconName: 'sparkles' },
    ],
    steps: [
      { step: 1, title: 'Paste Image Link', desc: 'Paste the link of the photo or web image you want to convert.' },
      { step: 2, title: 'Choose Output Format', desc: 'Select JPG, PNG, or WebP.' },
      { step: 3, title: 'Download Image', desc: 'Save the converted image file directly to your gallery.' },
    ],
    deviceTips: {
      iphone: ['Converts and saves directly to your Photos app.'],
      android: ['Saves to your Gallery Downloads album.'],
      desktop: ['Download full-resolution converted graphics to your computer.'],
    },
    qualityOptions: [
      { format: 'JPG', quality: 'High Quality (95%)', resolution: 'Original', note: 'Universal photograph standard' },
      { format: 'PNG', quality: 'Lossless RGBA', resolution: 'Original', note: 'Preserves transparent layers' },
      { format: 'WebP', quality: 'Optimized Web', resolution: 'Original', note: 'Fastest loading web format' },
    ],
    tips: [
      { title: 'Preserves Quality', desc: 'Converts cleanly without introducing pixelation or compression artifacts.' },
      { title: 'Transparency Support', desc: 'PNG preserves transparent logos and cutouts.' },
      { title: 'No Account Needed', desc: 'Convert as many images as you need without signing up.' },
    ],
    faqs: [
      { question: 'What is the best format for photos?', answer: 'JPG is the best choice for photos and real-world pictures due to great compression and universal compatibility.' },
      { question: 'What is the best format for transparent logos?', answer: 'PNG is ideal for graphics, illustrations, and images with transparent backgrounds.' },
      { question: 'Why use WebP?', answer: 'WebP is the modern Google format that provides smaller file sizes while matching PNG and JPG quality.' },
      { question: 'Can I use this on my phone?', answer: 'Yes! It runs smoothly in your mobile web browser on iOS and Android.' },
      { question: 'Is there any daily limit?', answer: 'No limit. It is 100% free for everyone.' },
    ],
    relatedSlugs: ['pinterest', 'instagram', 'video-to-mp4', 'compress-video'],
    isConverter: true,
  },

  'audio-converter': {
    slug: 'audio-converter',
    name: 'Audio Converter',
    shortDesc: 'Convert MP3, WAV, M4A',
    brandColor: '#22b573',
    brandGradient: 'from-emerald-500 to-teal-600',
    iconTileBg: '#22b573',
    iconLetter: '🎧',
    iconName: 'headphones',
    metaTitle: 'Free Online Audio Converter · Convert to MP3, WAV, M4A, AAC · Dispatch',
    metaDescription: 'Convert any audio file or stream to MP3, WAV, AAC, and M4A. Free high-bitrate online audio converter with no sign-up.',
    heroH1: 'Online Audio Format Converter',
    intro: 'Convert music, voice memos, speeches, and podcasts into MP3, WAV, or M4A. Enjoy crystal-clear sound with customizable bitrates.',
    examplePlaceholder: 'Paste an audio or music link to convert...',
    supportedContentTypes: [
      { title: 'MP3 (Up to 320 kbps)', desc: 'The universal music format supported on every device.', badge: '320 kbps MP3', iconName: 'headphones' },
      { title: 'WAV (Uncompressed)', desc: 'Lossless studio standard for audio editing and mastering.', badge: 'Lossless WAV', iconName: 'mic' },
      { title: 'M4A / AAC', desc: 'High-efficiency audio container for Apple Music and iOS.', badge: 'Apple M4A', iconName: 'music' },
    ],
    steps: [
      { step: 1, title: 'Paste Audio Link', desc: 'Paste the link to the music track or audio stream.' },
      { step: 2, title: 'Pick Format & Bitrate', desc: 'Choose MP3 (320 kbps), WAV, or M4A.' },
      { step: 3, title: 'Download Converted Audio', desc: 'Save the audio track to your music collection.' },
    ],
    deviceTips: {
      iphone: ['Save directly into your Files app or sync to your music collection.'],
      android: ['Saves to your device Music directory for instant playback.'],
      desktop: ['Download studio-quality audio files for editing or personal listening.'],
    },
    qualityOptions: [
      { format: 'MP3', quality: '320 kbps Studio', resolution: '44.1 kHz Stereo', note: 'Top MP3 quality' },
      { format: 'WAV', quality: 'Lossless PCM', resolution: '16-bit / 44.1 kHz', note: 'Studio recording standard' },
      { format: 'M4A', quality: 'AAC High Profile', resolution: '256 kbps', note: 'Apple ecosystem' },
    ],
    tips: [
      { title: 'Stereo Clarity', desc: 'Full stereo separation is preserved on all music tracks.' },
      { title: 'Bitrate Options', desc: 'Choose between 320 kbps, 192 kbps, or 128 kbps.' },
      { title: 'Private & Safe', desc: 'We never store your audio files or personal data.' },
    ],
    faqs: [
      { question: 'What audio formats are supported?', answer: 'We convert into MP3, WAV, AAC, and M4A formats.' },
      { question: 'Can I convert long audio files like 2-hour podcasts?', answer: 'Yes! Full-length albums, long speeches, and multi-hour podcasts are supported.' },
      { question: 'Does converting reduce audio quality?', answer: 'When selecting 320 kbps MP3 or WAV, the output matches the original source clarity.' },
      { question: 'Is this converter free?', answer: 'Yes, 100% free with no limits.' },
      { question: 'Do I need to install any app?', answer: 'No installation required; works directly in your web browser.' },
    ],
    relatedSlugs: ['video-to-mp3', 'mp3', 'video-to-mp4', 'compress-video'],
    isConverter: true,
  },

  'compress-video': {
    slug: 'compress-video',
    name: 'Compress Video',
    shortDesc: 'Reduce file size, keep quality',
    brandColor: '#f59e0b',
    brandGradient: 'from-amber-500 to-orange-600',
    iconTileBg: '#f59e0b',
    iconLetter: '📦',
    iconName: 'shrink',
    metaTitle: 'Free Video Compressor Online · Reduce Video Size · Dispatch',
    metaDescription: 'Compress videos online for WhatsApp, Discord, Email, and Social Media. Reduce file size by up to 80% while keeping sharp quality.',
    heroH1: 'Online Video Compressor',
    intro: 'Shrink large video files by up to 80% while preserving crisp HD picture quality. Perfect for sharing on WhatsApp, Discord, email, and social media.',
    examplePlaceholder: 'Paste a video link to compress and optimize...',
    supportedContentTypes: [
      { title: 'Discord & Email Compression', desc: 'Shrink video files under 8MB or 25MB for instant attachment sharing.', badge: 'Under 25MB', iconName: 'mail' },
      { title: 'WhatsApp Optimization', desc: 'Compress videos for smooth, fast sending without buffering.', badge: 'WhatsApp Ready', iconName: 'smartphone' },
      { title: 'Save Phone Storage', desc: 'Reduce file sizes on your phone while maintaining clear 1080p playback.', badge: 'Save 70% Space', iconName: 'hard-drive' },
    ],
    steps: [
      { step: 1, title: 'Paste Video Link', desc: 'Paste the link of the video you want to shrink.' },
      { step: 2, title: 'Choose Compression Target', desc: 'Pick your preferred balance of file size and visual sharpness.' },
      { step: 3, title: 'Download Compressed MP4', desc: 'Save the lightweight video file instantly.' },
    ],
    deviceTips: {
      iphone: ['Compress and share straight to WhatsApp, Messages, or Mail without errors.'],
      android: ['Save lightweight MP4s to your Gallery and send over any messaging app.'],
      desktop: ['Shrink presentation videos and screen recordings for easy emailing.'],
    },
    qualityOptions: [
      { format: 'MP4', quality: 'Smart High Quality', resolution: '1080p', note: 'Saves ~40% file size, invisible difference' },
      { format: 'MP4', quality: 'Standard Sharing', resolution: '720p', note: 'Saves ~65% file size, ideal for social chat' },
      { format: 'MP4', quality: 'Ultra Compact', resolution: '480p', note: 'Saves ~85% file size for email and forum attachments' },
    ],
    tips: [
      { title: 'Smart Bitrate Encoding', desc: 'Uses advanced two-pass encoding to keep details sharp in motion while trimming redundant data.' },
      { title: 'Full Audio Preservation', desc: 'Keeps speech and music clear and audible.' },
      { title: 'Universal MP4', desc: 'Plays on every computer, tablet, and mobile device.' },
    ],
    faqs: [
      { question: 'Will compressing make my video blurry?', answer: 'Our smart compressor preserves facial details, text, and colors so the video stays crisp while using much less storage.' },
      { question: 'Can I send compressed videos on WhatsApp and Discord?', answer: 'Yes! The compressed MP4 is optimized to easily fit under email and chat upload limits.' },
      { question: 'How much space will I save?', answer: 'Most users save between 50% and 80% of original file size.' },
      { question: 'Is it safe and private?', answer: 'Yes. We never store or view your files, and downloads happen securely.' },
      { question: 'Is this video compressor free?', answer: 'Yes, 100% free with no limits.' },
    ],
    relatedSlugs: ['video-to-mp4', 'video-to-mp3', 'image-converter', 'audio-converter'],
    isConverter: true,
  },
};

export const popularPlatformsList = [
  platformsData.tiktok,
  platformsData.instagram,
  platformsData.youtube,
  platformsData.twitter,
  platformsData.facebook,
  platformsData.pinterest,
  platformsData.spotify,
  platformsData.soundcloud,
  platformsData.capcut,
  platformsData.threads,
];

export const allPlatformSlugs = Object.keys(platformsData);
