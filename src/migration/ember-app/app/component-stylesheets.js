import glob from 'glob';
import { join } from 'node:path';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, 'components', '**', 'styles.{css,scss}'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath, 'components'),
          file: 'styles.scss',
        },
        replace(key) {
          return `app/components/${key}.scss`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'styles.css',
      },
      replace(key) {
        return `app/components/${key}.css`;
      },
    });
  });
}
