import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponents(options: Options): FilePathMapEntries {
  const { pod, podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const filePaths1 = findFiles(
    join('tests/integration', podPath, pod, '**', 'component-test.{js,ts}'),
    {
      ignoreList: [join('tests/integration', podPath, 'components', pod, '**')],
      projectRoot,
    },
  );

  const filePathMap1 = filePaths1.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: join('tests/integration', podPath),
      replace: (key: string) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const filePaths2 = findFiles(
    join(
      'tests/integration',
      podPath,
      'components',
      pod,
      '**',
      'component-test.{js,ts}',
    ),
    {
      projectRoot,
    },
  );

  const filePathMap2 = filePaths2.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: join('tests/integration', podPath, 'components'),
      replace: (key: string) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });

  return [...filePathMap1, ...filePathMap2] as FilePathMapEntries;
}
