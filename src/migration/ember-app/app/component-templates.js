import { join } from 'node:path';

import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponentTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, 'components', '**', 'template.hbs'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'template',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
