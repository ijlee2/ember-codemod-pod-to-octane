import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type { FilePathMapEntries, Options } from '../../../types/index.js';

export function migrationStrategyForServices(
  options: Options,
): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(join('app', podPath, '**', 'service.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'service',
      },
      replace: (key: string) => {
        return `app/services/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
