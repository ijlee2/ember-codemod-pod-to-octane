import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function updatePathsInAppFolder(migrationStrategy, options) {
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
