import { join } from 'node:path';

import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, '!(components)', '**', 'template.hbs'),
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'template',
      },
      replace: (key) => {
        return `app/templates/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
