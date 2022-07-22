import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteAdapters(projectRoot) {
  const oldPaths = glob.sync('app/**/adapter.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'adapter.ts',
        },
        replace(key) {
          return `app/adapters/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'adapter.js',
      },
      replace(key) {
        return `app/adapters/${key}.js`;
      },
    });
  });
}
