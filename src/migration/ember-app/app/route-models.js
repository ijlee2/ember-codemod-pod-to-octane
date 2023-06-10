import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteModels(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(join('app', podPath, '**', 'model.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'model',
      },
      replace: (key) => {
        return `app/models/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
