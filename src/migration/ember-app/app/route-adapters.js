import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteAdapters(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(join('app', podPath, '**', 'adapter.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'adapter',
      },
      replace: (key) => {
        return `app/adapters/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
