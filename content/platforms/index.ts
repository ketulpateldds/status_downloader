import { instagramContent } from './instagram';
import { youtubeContent } from './youtube';
import { tiktokContent } from './tiktok';
import { twitterContent } from './twitter';
import { facebookContent } from './facebook';
import { pinterestContent } from './pinterest';
import { snapchatContent } from './snapchat';
import { mp3Content } from './mp3';
import { PlatformContent } from '../types';

export const allPlatforms: Record<string, PlatformContent> = {
  instagram: instagramContent,
  youtube: youtubeContent,
  tiktok: tiktokContent,
  twitter: twitterContent,
  facebook: facebookContent,
  pinterest: pinterestContent,
  snapchat: snapchatContent,
  mp3: mp3Content,
};

export const platformList: PlatformContent[] = [
  instagramContent,
  youtubeContent,
  tiktokContent,
  twitterContent,
  facebookContent,
  pinterestContent,
  snapchatContent,
  mp3Content,
];
