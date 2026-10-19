import { tiktokContent } from './tiktok';
import { instagramContent } from './instagram';
import { youtubeContent } from './youtube';
import { twitterContent } from './twitter';
import { facebookContent } from './facebook';
import { pinterestContent } from './pinterest';
import { spotifyContent } from './spotify';
import { soundcloudContent } from './soundcloud';
import { capcutContent } from './capcut';
import { threadsContent } from './threads';
import { mp3Content } from './mp3';
import { PlatformContent } from '../types';

export const allPlatforms: Record<string, PlatformContent> = {
  tiktok: tiktokContent,
  instagram: instagramContent,
  youtube: youtubeContent,
  twitter: twitterContent,
  facebook: facebookContent,
  pinterest: pinterestContent,
  spotify: spotifyContent,
  soundcloud: soundcloudContent,
  capcut: capcutContent,
  threads: threadsContent,
  mp3: mp3Content,
};

export const platformList: PlatformContent[] = [
  tiktokContent,
  instagramContent,
  youtubeContent,
  twitterContent,
  facebookContent,
  pinterestContent,
  spotifyContent,
  soundcloudContent,
  capcutContent,
  threadsContent,
  mp3Content,
];
