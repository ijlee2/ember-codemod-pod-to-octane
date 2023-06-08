import { join } from 'node:path';

import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'controller.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
