import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
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
      replace: (key) => {
        return `app/routes/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
