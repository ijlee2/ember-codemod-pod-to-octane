import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteStylesheets(projectRoot) {
  const oldPaths = glob.sync('addon/!(components)/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'addon',
          file: 'styles.scss',
        },
        replace(key) {
          return `addon/styles/${key}.scss`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'addon',
        file: 'styles.css',
      },
      replace(key) {
        return `addon/styles/${key}.css`;
      },
    });
  });
}
