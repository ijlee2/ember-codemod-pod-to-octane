import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForServices(projectRoot) {
  const oldPaths = glob.sync('tests/unit/!(services)/**/service-test.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'tests/unit',
          file: 'service-test.ts',
        },
        replace(key) {
          return `tests/unit/services/${key}-test.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'tests/unit',
        file: 'service-test.js',
      },
      replace(key) {
        return `tests/unit/services/${key}-test.js`;
      },
    });
  });
}
