export interface ToolItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  badge: string;
  colorName: 'pink' | 'blue' | 'purple' | 'green' | 'orange';
  bgTint: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

export const conversionTools: ToolItem[] = [
  {
    id: 'video-to-mp3',
    name: 'Video to MP3',
    slug: 'video-to-mp3',
    description: 'Extract audio from any video in crystal-clear quality.',
    badge: 'Audio Extract',
    colorName: 'pink',
    bgTint: 'bg-[#fff1f5]',
    borderColor: 'border-[#fed7e2]',
    iconBg: 'bg-[#ec4a7b]',
    iconColor: 'text-white',
  },
  {
    id: 'video-to-mp4',
    name: 'Video to MP4',
    slug: 'video-to-mp4',
    description: 'Convert videos to universal MP4 in multiple resolutions.',
    badge: 'Universal Video',
    colorName: 'blue',
    bgTint: 'bg-[#f0f7ff]',
    borderColor: 'border-[#bae0fd]',
    iconBg: 'bg-[#2b8de8]',
    iconColor: 'text-white',
  },
  {
    id: 'image-converter',
    name: 'Image Converter',
    slug: 'image-converter',
    description: 'Convert images between JPG, PNG, and WebP instantly.',
    badge: 'Fast Image',
    colorName: 'purple',
    bgTint: 'bg-[#f6f2ff]',
    borderColor: 'border-[#e0d4fe]',
    iconBg: 'bg-[#8b5cf6]',
    iconColor: 'text-white',
  },
  {
    id: 'audio-converter',
    name: 'Audio Converter',
    slug: 'audio-converter',
    description: 'Convert audio to MP3, WAV, AAC, and M4A formats.',
    badge: 'High Bitrate',
    colorName: 'green',
    bgTint: 'bg-[#edfdf4]',
    borderColor: 'border-[#bcf0da]',
    iconBg: 'bg-[#22b573]',
    iconColor: 'text-white',
  },
  {
    id: 'compress-video',
    name: 'Compress Video',
    slug: 'compress-video',
    description: 'Reduce file size while keeping original crisp visual quality.',
    badge: 'Save Storage',
    colorName: 'orange',
    bgTint: 'bg-[#fff8ed]',
    borderColor: 'border-[#fedfb4]',
    iconBg: 'bg-[#f59e0b]',
    iconColor: 'text-white',
  },
];
