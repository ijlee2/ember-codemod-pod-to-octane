import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
} from 'node:fs';
import { dirname, join } from 'node:path';

function removeDirectoryIfEmpty({ oldPath, projectRoot }) {
  const directories = dirname(oldPath).split('/');
  const depth = directories.length;

  for (let i = 0; i < depth; i++) {
    const directory = join(projectRoot, ...directories);
    const numFilesLeft = readdirSync(directory).length;

    if (numFilesLeft > 0) {
      continue;
    }

    rmSync(directory, { recursive: true });
    directories.pop();
  }
}

export function moveFiles(migrationStrategy, options) {
  const { projectRoot } = options;

  migrationStrategy.forEach((newPath, oldPath) => {
    const oldAbsolutePath = join(projectRoot, oldPath);

    const newAbsolutePath = join(projectRoot, newPath);
    const newDirectory = dirname(newAbsolutePath);

    // Move file
    if (!existsSync(newDirectory)) {
      mkdirSync(newDirectory, { recursive: true });
    }

    renameSync(oldAbsolutePath, newAbsolutePath);
    removeDirectoryIfEmpty({ oldPath, projectRoot });
  });
}
