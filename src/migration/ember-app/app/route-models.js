import { join } from 'node:path';

import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteModels(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'model.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'model',
      },
      replace: (key) => {
        return `app/models/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
