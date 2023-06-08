import { join } from 'node:path';

import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('tests/unit', podPath, '!(services)', '**', 'service-test.{js,ts}'),
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'service-test',
      },
      replace: (key) => {
        return `tests/unit/services/${key}-test`;
      },
    });

    return [oldPath, newPath];
  });
}
