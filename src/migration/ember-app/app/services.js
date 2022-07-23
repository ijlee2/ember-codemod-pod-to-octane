import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForServices(projectRoot) {
  const oldPaths = glob.sync('app/**/service.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'service.ts',
        },
        replace(key) {
          return `app/services/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'service.js',
      },
      replace(key) {
        return `app/services/${key}.js`;
      },
    });
  });
}
