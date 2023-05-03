import { join } from 'node:path';

import { findFiles, mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, 'components', '**', 'styles.{css,scss}'),
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('app', podPath, 'components'),
          file: 'styles.scss',
        },
        replace(key) {
          return `app/components/${key}.scss`;
        },
      });
    }

    return mapFilePath(oldPath, {
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
