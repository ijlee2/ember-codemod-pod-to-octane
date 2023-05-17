import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, '!(components)', '**', 'styles.{css,scss}'),
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'styles.scss',
        },
        replace(key) {
          return `app/styles/${key}.scss`;
        },
      });
    }

    return mapFilePath(oldPath, {
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
