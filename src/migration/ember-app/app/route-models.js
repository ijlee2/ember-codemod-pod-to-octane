import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteModels(projectRoot) {
  const oldPaths = glob.sync('app/**/model.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'model.ts',
        },
        replace(key) {
          return `app/models/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'model.js',
      },
      replace(key) {
        return `app/models/${key}.js`;
      },
    });
  });
}
