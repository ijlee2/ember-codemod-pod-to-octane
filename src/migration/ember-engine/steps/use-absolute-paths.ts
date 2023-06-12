import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { OptionsWithProjectName } from '../../../types/index.js';

function removeRelativePaths(
  oldFile: string,
  {
    filePath,
    projectName,
    projectRoot,
  }: { filePath: string; projectName: string; projectRoot: string },
) {
  const regex = new RegExp(`(?:'|")(.{1,2}/(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    const oldPath = matchResult[1]!;

    let newPath = relative(
      projectRoot,
      resolve(projectRoot, dirname(filePath), oldPath),
    );

    if (newPath.startsWith('addon')) {
      newPath = join(projectName, newPath.replace(new RegExp('^addon/'), ''));
    } else if (newPath.startsWith('tests')) {
      newPath = join('dummy', newPath);
    }

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function updatePaths(options: OptionsWithProjectName): void {
  const { projectName, projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('{addon,tests}/**/*.{d.ts,js,ts}', {
    projectRoot,
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const newFile = removeRelativePaths(oldFile, {
      filePath,
      projectName,
      projectRoot,
    });

    writeFileSync(oldPath, newFile, 'utf8');
  });
}

export function useAbsolutePaths(options: OptionsWithProjectName): void {
  updatePaths(options);
}
