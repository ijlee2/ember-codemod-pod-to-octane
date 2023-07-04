import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const filePaths1 = findFiles(
    'tests/unit/!(controllers)/**/controller-test.{js,ts}',
    {
      projectRoot,
    },
  );

  const filePathMap1 = filePaths1.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'tests/unit',
        file: 'controller-test',
      },
      replace: (key: string) => {
        return `tests/unit/controllers/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const filePaths2 = findFiles(
    'tests/unit/controllers/**/controller-test.{js,ts}',
    {
      projectRoot,
    },
  );

  const filePathMap2 = filePaths2.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'tests/unit/controllers',
        file: 'controller-test',
      },
      replace: (key: string) => {
        return `tests/unit/controllers/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  return [...filePathMap1, ...filePathMap2] as FilePathMapEntries;
}
