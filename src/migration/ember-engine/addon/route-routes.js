import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteRoutes(projectRoot) {
  const oldPaths = glob.sync('addon/**/route.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'addon',
          file: 'route.ts',
        },
        replace(key) {
          return `addon/routes/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'addon',
        file: 'route.js',
      },
      replace(key) {
        return `addon/routes/${key}.js`;
      },
    });
  });
}
