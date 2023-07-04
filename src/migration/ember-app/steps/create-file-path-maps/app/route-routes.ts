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

  const filePaths = findFiles(join('app', podPath, '**', 'route.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'route',
      },
      replace: (key: string) => {
        return `app/routes/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
