import glob from 'glob';
import { join } from 'node:path';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteAdapters(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(join('app', podPath, '**', 'adapter.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'adapter.ts',
        },
        replace(key) {
          return `app/adapters/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'adapter.js',
      },
      replace(key) {
        return `app/adapters/${key}.js`;
      },
    });
  });
}
