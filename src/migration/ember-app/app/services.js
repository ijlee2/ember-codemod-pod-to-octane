import { join } from 'node:path';

import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'service.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
