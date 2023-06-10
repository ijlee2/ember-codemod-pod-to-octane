import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'service.{js,ts}'), {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'service',
      },
      replace: (key) => {
        return `app/services/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
