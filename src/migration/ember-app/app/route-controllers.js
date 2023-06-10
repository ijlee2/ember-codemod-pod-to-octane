import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('app', podPath, '**', 'controller.{js,ts}'),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'controller',
      },
      replace: (key) => {
        return `app/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
