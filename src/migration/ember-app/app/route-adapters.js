import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteAdapters(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'adapter.{js,ts}'), {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'adapter',
      },
      replace: (key) => {
        return `app/adapters/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
