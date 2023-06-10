import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'route.{js,ts}'), {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'route',
      },
      replace: (key) => {
        return `app/routes/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
