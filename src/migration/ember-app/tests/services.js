import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('tests/unit', podPath, '!(services)', '**', 'service-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
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
