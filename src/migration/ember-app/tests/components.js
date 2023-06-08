import { join } from 'node:path';

import { findFiles, renameFile } from '@codemod-utils/files';

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
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
