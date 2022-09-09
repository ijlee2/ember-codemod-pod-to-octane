import { join } from 'node:path';

import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, '!(components)', '**', 'styles.{css,scss}'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'styles.scss',
        },
        replace(key) {
          return `app/styles/${key}.scss`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'styles.css',
      },
      replace(key) {
        return `app/styles/${key}.css`;
      },
    });
  });
}
