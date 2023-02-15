import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function updatePathsInAppFolder(migrationStrategy, options) {
  const { projectRoot } = options;

  migrationStrategy.forEach((newPath, oldPath) => {
    // Read file
    const newAbsolutePath = join(projectRoot, newPath);
    const file = readFileSync(newAbsolutePath, 'utf8');

    // Update file
    const oldRelativePath = oldPath.replace(/^app\//, '').replace(/\.js$/, '');
    const newRelativePath = newPath.replace(/^app\//, '').replace(/\.js$/, '');

    const newFile = file.replace(new RegExp(oldRelativePath), newRelativePath);
    writeFileSync(newAbsolutePath, newFile, 'utf8');
  });
}
