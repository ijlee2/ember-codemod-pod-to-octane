import { join } from 'node:path';

import { findFiles, mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteRoutes(options) {
  const { podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const oldPaths1 = findFiles(
    join('tests/unit', podPath, '!(routes)', '**', 'route-test.{js,ts}'),
    {
      cwd: projectRoot,
    },
  );

  const newPaths1 = oldPaths1.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('tests/unit', podPath),
          file: 'route-test.ts',
        },
        replace(key) {
          return `tests/unit/routes/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: join('tests/unit', podPath),
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
  const oldPaths2 = findFiles(
    join('tests/unit', podPath, 'routes/**/route-test.{js,ts}'),
    {
      cwd: projectRoot,
    },
  );

  const newPaths2 = oldPaths2.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('tests/unit', podPath, 'routes'),
          file: 'route-test.ts',
        },
        replace(key) {
          return `tests/unit/routes/${key}-test.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: join('tests/unit', podPath, 'routes'),
        file: 'route-test.js',
      },
      replace(key) {
        return `tests/unit/routes/${key}-test.js`;
      },
    });
  });

  return [...newPaths1, ...newPaths2];
}
