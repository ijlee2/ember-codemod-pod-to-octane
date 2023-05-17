import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const oldPaths1 = findFiles('tests/unit/!(routes)/**/route-test.{js,ts}', {
    cwd: projectRoot,
  });

  const newPaths1 = oldPaths1.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'tests/unit',
          file: 'route-test.ts',
        },
        replace(key) {
          return `tests/unit/routes/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: 'tests/unit',
        file: 'route-test.js',
      },
      replace(key) {
        return `tests/unit/routes/${key}-test.js`;
      },
    });
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const oldPaths2 = findFiles('tests/unit/routes/**/route-test.{js,ts}', {
    cwd: projectRoot,
  });

  const newPaths2 = oldPaths2.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'tests/unit/routes',
          file: 'route-test.ts',
        },
        replace(key) {
          return `tests/unit/routes/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: 'tests/unit/routes',
        file: 'route-test.js',
      },
      replace(key) {
        return `tests/unit/routes/${key}-test.js`;
      },
    });
  });

  return [...newPaths1, ...newPaths2];
}
