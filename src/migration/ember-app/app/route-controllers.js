import { join } from 'node:path';

import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(join('app', podPath, '**', 'controller.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'controller.ts',
        },
        replace(key) {
          return `app/controllers/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
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
