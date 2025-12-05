import { readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import type { FilePathMap, Options } from '../../../types/index.js';

function getReexportPath(filePath: string): string {
  return relative('app', filePath).replace(/\.js$/, '').replaceAll(sep, '/');
}

export function updatePathsInAppFolder(
  filePathMap: FilePathMap,
  options: Options,
): void {
  const { projectRoot } = options;

  filePathMap.forEach((newFilePath, oldFilePath) => {
    const oldFile = readFileSync(join(projectRoot, newFilePath), 'utf8');

    const newFile = oldFile.replace(
      getReexportPath(oldFilePath),
      getReexportPath(newFilePath),
    );

    writeFileSync(join(projectRoot, newFilePath), newFile, 'utf8');
  });
}
