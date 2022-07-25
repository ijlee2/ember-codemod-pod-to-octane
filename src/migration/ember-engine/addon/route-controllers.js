import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteControllers(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('addon/**/controller.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'addon',
          file: 'controller.ts',
        },
        replace(key) {
          return `addon/controllers/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'addon',
        file: 'controller.js',
      },
      replace(key) {
        return `addon/controllers/${key}.js`;
      },
    });
  });
}
