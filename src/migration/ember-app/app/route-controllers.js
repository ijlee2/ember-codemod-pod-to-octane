import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'controller.{js,ts}'), {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'controller',
      },
      replace: (key) => {
        return `app/controllers/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
