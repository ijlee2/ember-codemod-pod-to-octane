import { join } from 'node:path';

import { findFiles, mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'controller.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'controller.ts',
        },
        replace(key) {
          return `app/controllers/${key}.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'controller.js',
      },
      replace(key) {
        return `app/controllers/${key}.js`;
      },
    });
  });
}
