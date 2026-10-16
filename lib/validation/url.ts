import { z } from 'zod';

export const urlSchema = z.string()
  .trim()
  .min(1, 'Please enter or paste a URL')
  .url('Please enter a valid web URL starting with https://')
  .refine(
    (url) => !url.includes('facebook.com/messages') && !url.includes('instagram.com/direct'),
    'Private chats and messages cannot be fetched.'
  );

export function validateInputUrl(url: string): { success: boolean; error?: string } {
  const result = urlSchema.safeParse(url);
  if (!result.success) {
    return { success: false, error: result.error.errors[0]?.message };
  }
  return { success: true };
}
