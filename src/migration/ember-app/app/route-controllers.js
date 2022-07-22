import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteControllers(projectRoot) {
  const oldPaths = glob.sync('app/**/controller.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'controller.ts',
        },
        replace(key) {
          return `app/controllers/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'controller.js',
      },
      replace(key) {
        return `app/controllers/${key}.js`;
      },
    });
  });
}
