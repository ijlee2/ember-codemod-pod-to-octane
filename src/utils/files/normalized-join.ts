import { join, sep } from 'node:path';

export function normalizedJoin(...folders: string[]): string {
  return join(...folders).replaceAll(sep, '/');
}
