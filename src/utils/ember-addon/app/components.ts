import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { FilePathMap, Options } from '../../../types/index.js';

export function updatePathsInAppFolder(
  migrationStrategy: FilePathMap,
  options: Options,
): void {
  const { projectRoot } = options;

  migrationStrategy.forEach((newFilePath, oldFilePath) => {
    // Read file
    const newAbsolutePath = join(projectRoot, newFilePath);
    const file = readFileSync(newAbsolutePath, 'utf8');

    // Update file
    const oldRelativePath = oldFilePath
      .replace(/^app\//, '')
      .replace(/\.js$/, '');

    const newRelativePath = newFilePath
      .replace(/^app\//, '')
      .replace(/\.js$/, '');

    const newFile = file.replace(new RegExp(oldRelativePath), newRelativePath);
    writeFileSync(newAbsolutePath, newFile, 'utf8');
  });
}
