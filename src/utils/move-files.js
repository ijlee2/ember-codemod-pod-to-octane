import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
} from 'node:fs';
import { dirname, join } from 'node:path';

export function moveFiles({ migrationStrategy, projectRoot }) {
  migrationStrategy.forEach((newPath, oldPath) => {
    const oldAbsolutePath = join(projectRoot, oldPath);
    const oldDirectory = dirname(oldAbsolutePath);

    const newAbsolutePath = join(projectRoot, newPath);
    const newDirectory = dirname(newAbsolutePath);

    // Move file
    if (!existsSync(newDirectory)) {
      mkdirSync(newDirectory, { recursive: true });
    }

    renameSync(oldAbsolutePath, newAbsolutePath);

    // Clean up directory
    const numFilesLeft = readdirSync(oldDirectory).length;

    if (numFilesLeft === 0) {
      rmSync(oldDirectory, { recursive: true });
    }
  });
}
