import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function migrationStrategyForRouteRoutes(
  options: Options,
): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const filePaths1 = findFiles(
    join('tests/unit', podPath, '!(routes)', '**', 'route-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  const filePathMap1 = filePaths1.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'route-test',
      },
      replace: (key: string) => {
        return `tests/unit/routes/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const filePaths2 = findFiles(
    join('tests/unit', podPath, 'routes/**/route-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  const filePathMap2 = filePaths2.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('tests/unit', podPath, 'routes'),
        file: 'route-test',
      },
      replace: (key: string) => {
        return `tests/unit/routes/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  return [...filePathMap1, ...filePathMap2] as FilePathMapEntries;
}
