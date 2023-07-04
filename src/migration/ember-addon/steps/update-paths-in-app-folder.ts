import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { FilePathMap, Options } from '../../../types/index.js';

export function updatePathsInAppFolder(
  filePathMap: FilePathMap,
  options: Options,
): void {
  const { projectRoot } = options;

  filePathMap.forEach((newFilePath, oldFilePath) => {
    const newAbsolutePath = join(projectRoot, newFilePath);
    const file = readFileSync(newAbsolutePath, 'utf8');

    const text = oldFilePath.replace(/^app\//, '').replace(/\.js$/, '');
    const newText = newFilePath.replace(/^app\//, '').replace(/\.js$/, '');
    const newFile = file.replace(new RegExp(text), newText);

    writeFileSync(newAbsolutePath, newFile, 'utf8');
  });
}
