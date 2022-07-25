import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/!(components)/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'styles.scss',
        },
        replace(key) {
          return `app/styles/${key}.scss`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'styles.css',
      },
      replace(key) {
        return `app/styles/${key}.css`;
      },
    });
  });
}
