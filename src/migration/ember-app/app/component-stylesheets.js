import { join } from 'node:path';

import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponentStylesheets(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, 'components', '**', 'styles.{css,scss}'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'styles',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
