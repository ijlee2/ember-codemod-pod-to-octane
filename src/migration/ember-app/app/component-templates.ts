import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentTemplates(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('app', podPath, 'components', '**', 'template.hbs'),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'template',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
