import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponents(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'tests/integration/components',
          file: 'component-test.ts',
        },
        replace(key) {
          return `tests/integration/components/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: 'tests/integration/components',
        file: 'component-test.js',
      },
      replace(key) {
        return `tests/integration/components/${key}-test.js`;
      },
    });
  });
}
