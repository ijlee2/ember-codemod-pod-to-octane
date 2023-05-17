import { readFileSync, writeFileSync } from 'node:fs';
import { join, parse } from 'node:path';

import { findFiles } from '@codemod-utils/files';

function removeFileExtension(path) {
  const { dir, name } = parse(path);

  return `${dir}/${name}`;
}

function createMapping(migrationStrategy) {
  return new Map(
    [...migrationStrategy].map(([oldPath, newPath]) => {
      const before = removeFileExtension(oldPath);
      const after = removeFileExtension(newPath);

      return [before, after];
    }),
  );
}

function updatePathsToAddonFiles(oldFile, { mapping, projectName }) {
  const regex = new RegExp(`(?:'|")(${projectName}/(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    // eslint-disable-next-line no-unused-vars
    const [_, oldPath, remainingPath] = matchResult;
    const before = join('addon', remainingPath);

    if (!mapping.has(before)) {
      return;
    }

    const after = mapping.get(before).replace(new RegExp('^addon/'), '');
    const newPath = join(projectName, after);

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function updatePathsToTestFiles(oldFile, { mapping, projectName }) {
  const regex = new RegExp(`(?:'|")(${projectName}/(.*))(?:'|")`, 'g');
  const matchResults = [...oldFile.matchAll(regex)];

  let newFile = oldFile;

  matchResults.forEach((matchResult) => {
    // eslint-disable-next-line no-unused-vars
    const [_, oldPath, remainingPath] = matchResult;
    const before = remainingPath;

    if (!mapping.has(before)) {
      return;
    }

    const after = mapping.get(before);
    const newPath = join(projectName, after);

    newFile = newFile.replace(oldPath, newPath);
  });

  return newFile;
}

function updatePaths(mapping, options) {
  const { projectName, projectRoot } = options;

  // File extensions had been specified, partly to encode assumptions
  // about Ember, and partly to avoid corrupting non-text files
  const filePaths = findFiles('{addon,tests}/**/*.{d.ts,js,ts}', {
    cwd: projectRoot,
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

export function updateAbsolutePaths(migrationStrategy, options) {
  const mapping = createMapping(migrationStrategy);

  updatePaths(mapping, options);
}
