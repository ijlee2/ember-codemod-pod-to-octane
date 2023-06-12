import { readFileSync, writeFileSync } from 'node:fs';
import { join, parse } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMap,
  OptionsWithProjectName,
} from '../../../types/index.js';

function removeFileExtension(path: string): string {
  const { dir, name } = parse(path);

  return `${dir}/${name}`;
}

function createMapping(migrationStrategy: FilePathMap): FilePathMap {
  return new Map(
    [...migrationStrategy].map(([oldPath, newPath]) => {
      const before = removeFileExtension(oldPath);
      const after = removeFileExtension(newPath);

      return [before, after];
    }),
  );
}

function updatePathsToAddonFiles(
  oldFile: string,
  { mapping, projectName }: { mapping: FilePathMap; projectName: string },
) {
  const regex = new RegExp(`(?:'|")(${projectName}/(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    const oldPath = matchResult[1]!;
    const remainingPath = matchResult[2]!;

    const before = join('addon', remainingPath);

    if (!mapping.has(before)) {
      return;
    }

    const after = mapping.get(before)!.replace(new RegExp('^addon/'), '');
    const newPath = join(projectName, after);

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function updatePathsToTestFiles(
  oldFile: string,
  { mapping, projectName }: { mapping: FilePathMap; projectName: string },
) {
  const regex = new RegExp(`(?:'|")(${projectName}/(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    const oldPath = matchResult[1]!;
    const remainingPath = matchResult[2]!;

    const before = remainingPath;

    if (!mapping.has(before)) {
      return;
    }

    const after = mapping.get(before)!;
    const newPath = join(projectName, after);

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function updatePaths(
  mapping: FilePathMap,
  options: OptionsWithProjectName,
): void {
  const { projectName, projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('{addon,tests}/**/*.{d.ts,js,ts}', {
    projectRoot,
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    let newFile = updatePathsToAddonFiles(oldFile, {
      mapping,
      projectName,
    });

    newFile = updatePathsToTestFiles(newFile, {
      mapping,
      projectName: 'dummy',
    });

    writeFileSync(oldPath, newFile, 'utf8');
  });
}

export function updateAbsolutePaths(
  migrationStrategy: FilePathMap,
  options: OptionsWithProjectName,
): void {
  const mapping = createMapping(migrationStrategy);

  updatePaths(mapping, options);
}
