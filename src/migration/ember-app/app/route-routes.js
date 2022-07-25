import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/**/route.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'route.ts',
        },
        replace(key) {
          return `app/routes/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'route.js',
      },
      replace(key) {
        return `app/routes/${key}.js`;
      },
    });
  });
}
