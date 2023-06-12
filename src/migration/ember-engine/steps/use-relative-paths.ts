import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { OptionsWithProjectName } from '../../../types/index.js';

function normalizeRelativePath(relativePath: string): string {
  if (relativePath.startsWith('..')) {
    return relativePath;
  }

  return `./${relativePath}`;
}

function updateFile(
  oldFile: string,
  {
    filePath,
    projectName,
    projectRoot,
  }: { filePath: string; projectName: string; projectRoot: string },
) {
  const regex = new RegExp(`(?:'|")(${projectName}/(.*/)*(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    const oldPath = matchResult[1]!;
    const remainingDirectories = matchResult[2]!;
    const fileName = matchResult[3]!;

    const from = dirname(filePath);
    const to = join(projectRoot, remainingDirectories);

    const relativePath = join(relative(from, to), fileName);
    const newPath = normalizeRelativePath(relativePath);

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function useRelativePathInAddonFolder(options: OptionsWithProjectName): void {
  const { projectName, projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('addon/**/*.{d.ts,js,ts}', {
    projectRoot,
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const newFile = updateFile(oldFile, {
      filePath,
      projectName,
      projectRoot: 'addon',
    });

    writeFileSync(oldPath, newFile, 'utf8');
  });
}

function useRelativePathInTestsFolder(options: OptionsWithProjectName): void {
  const { projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('tests/**/*.{d.ts,js,ts}', {
    projectRoot,
    ignoreList: ['tests/dummy/**/*'],
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const newFile = updateFile(oldFile, {
      filePath,
      projectName: 'dummy',
      projectRoot: '',
    });

    writeFileSync(oldPath, newFile, 'utf8');
  });
}

function useRelativePathInTestsDummyFolder(
  options: OptionsWithProjectName,
): void {
  const { projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('tests/dummy/**/*.{d.ts,js,ts}', {
    projectRoot,
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const newFile = updateFile(oldFile, {
      filePath,
      projectName: 'dummy',
      projectRoot: 'tests/dummy/app',
    });

    writeFileSync(oldPath, newFile, 'utf8');
  });
}

export function useRelativePaths(options: OptionsWithProjectName): void {
  useRelativePathInAddonFolder(options);
  useRelativePathInTestsFolder(options);
  useRelativePathInTestsDummyFolder(options);
}
