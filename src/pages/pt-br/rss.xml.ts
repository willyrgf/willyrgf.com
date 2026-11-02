import { getRssFeed } from '../../lib/rss';

export function GET() {
  return getRssFeed('pt-br');
}
