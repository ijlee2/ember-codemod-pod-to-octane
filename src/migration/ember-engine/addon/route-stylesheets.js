import glob from 'glob';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('addon/!(components)/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'addon',
          file: 'styles.scss',
        },
        replace(key) {
          return `addon/styles/${key}.scss`;
        },
      });
    }

    return mapFilePath(oldPath, {
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
