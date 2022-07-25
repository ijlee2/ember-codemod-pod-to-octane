import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentStylesheets(projectRoot) {
  const oldPaths = glob.sync('addon/components/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'addon/components',
          file: 'styles.scss',
        },
        replace(key) {
          return `addon/components/${key}.scss`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'styles.css',
      },
      replace(key) {
        return `addon/components/${key}.css`;
      },
    });
  });
}
