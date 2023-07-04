import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function migrationStrategyForServices(
  options: Options,
): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('tests/unit', podPath, '!(services)', '**', 'service-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'service-test',
      },
      replace: (key: string) => {
        return `tests/unit/services/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
