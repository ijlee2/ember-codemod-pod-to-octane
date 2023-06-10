import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponents(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join(
      'tests/integration',
      podPath,
      'components',
      '**',
      'component-test.{js,ts}',
    ),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('tests/integration', podPath, 'components'),
        file: 'component-test',
      },
      replace: (key) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
