import { join } from 'node:path';

import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(join('app', podPath, '**', 'service.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'service.ts',
        },
        replace(key) {
          return `app/services/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'service.js',
      },
      replace(key) {
        return `app/services/${key}.js`;
      },
    });
  });
}
