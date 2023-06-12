import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type { FilePathMapEntries, Options } from '../../../types/index.js';

export function migrationStrategyForRouteStylesheets(
  options: Options,
): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('app', podPath, '!(components)', '**', 'styles.{css,scss}'),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'styles',
      },
      replace: (key: string) => {
        return `app/styles/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
