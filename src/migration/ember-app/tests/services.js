import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForServices(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('tests/unit', podPath, '!(services)', '**', 'service-test.{js,ts}'),
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('tests/unit', podPath),
          file: 'service-test.ts',
        },
        replace(key) {
          return `tests/unit/services/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'service-test.js',
      },
      replace(key) {
        return `tests/unit/services/${key}-test.js`;
      },
    });
  });
}
