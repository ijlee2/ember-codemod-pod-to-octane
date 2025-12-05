import { normalize } from 'node:path';

import type { FilePathMap } from '@codemod-utils/files';

export function normalizeFilePathMap(filePathMap: FilePathMap): FilePathMap {
  const normalized: FilePathMap = new Map();

  filePathMap.forEach((newFilePath, oldFilePath) => {
    normalized.set(normalize(oldFilePath), normalize(newFilePath));
  });

  return normalized;
}
