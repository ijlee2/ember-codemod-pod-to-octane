import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponents(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
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

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('tests/integration', podPath, 'components'),
        file: 'component-test',
      },
      replace: (key) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldPath, newPath];
  });
}
