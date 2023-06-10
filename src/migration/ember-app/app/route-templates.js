import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, '!(components)', '**', 'template.hbs'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
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
