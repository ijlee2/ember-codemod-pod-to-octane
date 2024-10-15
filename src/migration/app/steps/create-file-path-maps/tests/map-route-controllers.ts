import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const podDir1 = join('tests/unit', podPath);

  const filePaths1 = findFiles(`${podDir1}/**/controller-test.{js,ts}`, {
    ignoreList: [join('tests/unit', podPath, 'controllers/**')],
    projectRoot,
  });

  const filePathMap1 = filePaths1.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: podDir1,
      replace: (key: string) => {
        return `tests/unit/controllers/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const podDir2 = join('tests/unit', podPath, 'controllers');

  const filePaths2 = findFiles(`${podDir2}/**/controller-test.{js,ts}`, {
    projectRoot,
  });

  const filePathMap2 = filePaths2.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: podDir2,
      replace: (key: string) => {
        return `tests/unit/controllers/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  return [...filePathMap1, ...filePathMap2] as FilePathMapEntries;
}
