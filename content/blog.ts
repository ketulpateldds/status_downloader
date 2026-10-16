export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  author: string;
  category: string;
  contentMarkdown: string;
}

export const sampleArticles: BlogPost[] = [
  {
    slug: 'why-public-media-archiving-matters',
    title: 'The Ephemeral Web: Why Independent Public Media Archiving Matters',
    excerpt: 'Digital content on corporate platforms disappears at an alarming rate. Here is how researchers, educators, and journalists preserve civic memory responsibly.',
    publishedDate: 'October 12, 2026',
    readTime: '6 min read',
    author: 'Elena Vance · Media Research Fellow',
    category: 'Digital Archival',
    contentMarkdown: 'We often imagine the internet as an immutable permanent record. The reality is far more fragile: links rot, servers decommission, accounts delete, and corporate policy shifts wipe out invaluable historical and cultural artifacts overnight.\n\nAccording to recent studies by digital preservation institutes, over 38% of web pages that existed in 2013 are no longer accessible today. When platforms pivot algorithms or shutter legacy APIs, millions of hours of public discourse, civic testimony, independent journalism, and educational craft vanish.\n\n### The Difference Between Commercial Piracy and Ethical Archiving\n\nArchiving public media is not about re-uploading someone else work or seeking commercial gain. Ethical archiving rests on three pillars:\n\n1. Strictly Public Availability: Never accessing anything behind private follow walls, password gates, or encrypted channels.\n2. Attribution & Context Preservation: Storing metadata — author, publication date, platform source, and original caption — alongside the media asset.\n3. Personal & Educational Scope: Utilizing stored media for offline study, local reference, non-profit education, and archival verification.\n\nBuilding Resilient Local Archives\n\nRelying on streaming platforms for critical instructional or research material creates a single point of failure. By maintaining local, uncompressed copies of essential public resources on redundant drives, educators and researchers safeguard knowledge against algorithmic whims.',
  },
  {
    slug: 'understanding-video-bitrates-and-codecs',
    title: 'Demystifying Bitrates & Codecs: What You Actually Get When You Download Public Video',
    excerpt: 'Why does 1080p on one site look sharper than 4K on another? A technical breakdown of H.264, VP9, AV1, and adaptive streaming multiplexing.',
    publishedDate: 'September 28, 2026',
    readTime: '8 min read',
    author: 'Marcus Thorne · Video Infrastructure Engineer',
    category: 'Engineering & Codecs',
    contentMarkdown: 'Resolution numbers like "1080p" or "4K" tell only a fraction of the story. You can easily have a 720p file with a generous 10 Mbps bitrate that completely outperforms a heavily compressed "4K" stream choking at 3 Mbps.\n\nWhen you use Dispatch to fetch a public video stream, you are tapping into the upstream delivery network. Here is how modern platforms encode and deliver your media.\n\n### Adaptive Bitrate Streaming (DASH and HLS)\n\nPlatforms like YouTube and X rarely store video as a single static MP4 file. Instead, they slice video into 2- to 6-second chunks across multiple quality tiers:\n\n- H.264 (AVC): The universal workhorse. Plays on everything from modern iPhones to 15-year-old smart TVs.\n- VP9: Efficient Google-backed open format providing superior compression efficiency at high resolutions.\n- AV1: Next-generation open codec delivering exceptional quality at fractional bitrates.\n\n### Why 1080p Video Streams Often Require Multiplexing\n\nTo optimize bandwidth, platforms deliver video packets and audio packets on completely separate network channels. When your web browser plays a video, it combines them on the fly in memory.\n\nDispatch performs a clean server-side multiplexing pass: combining the highest-bitrate video stream with the uncompressed audio channel into a universal, standalone MP4 file with zero transcoding loss.',
  },
  {
    slug: 'fair-use-and-responsible-offline-storage',
    title: 'Fair Use, Offline Storage & Creator Rights: The Legal & Ethical Blueprint',
    excerpt: 'A practical legal guide to what you can and cannot do with downloaded public social media content under international copyright doctrine.',
    publishedDate: 'September 15, 2026',
    readTime: '7 min read',
    author: 'Sarah Jenkins, Esq. · Digital Rights Attorney',
    category: 'Legal & Ethics',
    contentMarkdown: 'Every tool carries an ethical responsibility. As public video and audio download utilities have grown in capability, understanding the legal boundaries of offline storage is essential for every user.\n\n### What Fair Use Protects\n\nUnder United States copyright law (17 U.S. Code § 107) and comparable fair-dealing doctrines in the UK, Canada, and the EU, four factors determine whether offline storage and use is legally permissible:\n\n1. The Purpose and Character of the Use: Non-commercial, educational, research, and transformative commentary purposes receive broad protection.\n2. The Nature of the Copyrighted Work: Factual news broadcasts and public informational talks enjoy broader fair use flexibility than commercial studio films.\n3. The Amount and Substantiality Used: Saving an excerpt for critique versus storing a creator entire portfolio.\n4. The Effect on the Market: Personal offline viewing does not harm the creator commercial market, whereas public re-uploading or redistribution does.\n\n### Rules of Thumb for Ethical Web Citizens\n\n- Always Credit Original Creators: If you reference a public clip in a lecture or presentation, always cite the creator handle and platform.\n- Never Resell or Commercialize: Never monetize or package downloaded media assets.\n- Respect Creator Takedown Requests: If a creator asks you to remove content you have saved or referenced, honor their request promptly.',
  },
];
