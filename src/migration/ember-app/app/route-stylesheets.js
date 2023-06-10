import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, '!(components)', '**', 'styles.{css,scss}'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'styles',
      },
      replace: (key) => {
        return `app/styles/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
