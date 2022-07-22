import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponents(projectRoot) {
  const oldPaths = glob.sync(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'tests/integration/components',
          file: 'component-test.ts',
        },
        replace(key) {
          return `tests/integration/components/${key}-test.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
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
