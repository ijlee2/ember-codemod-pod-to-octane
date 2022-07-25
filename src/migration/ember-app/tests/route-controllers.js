import glob from 'glob';
import { join } from 'node:path';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteControllers(options) {
  const { podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const oldPaths1 = glob.sync(
    join(
      'tests/unit',
      podPath,
      '!(controllers)',
      '**',
      'controller-test.{js,ts}'
    ),
    {
      cwd: projectRoot,
    }
  );

  const newPaths1 = oldPaths1.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('tests/unit', podPath),
          file: 'controller-test.ts',
        },
        replace(key) {
          return `tests/unit/controllers/${key}-test.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'controller-test.js',
      },
      replace(key) {
        return `tests/unit/controllers/${key}-test.js`;
      },
    });
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const oldPaths2 = glob.sync(
    join('tests/unit', podPath, 'controllers/**/controller-test.{js,ts}'),
    {
      cwd: projectRoot,
    }
  );

  const newPaths2 = oldPaths2.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('tests/unit', podPath, 'controllers'),
          file: 'controller-test.ts',
        },
        replace(key) {
          return `tests/unit/controllers/${key}-test.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('tests/unit', podPath, 'controllers'),
        file: 'controller-test.js',
      },
      replace(key) {
        return `tests/unit/controllers/${key}-test.js`;
      },
    });
  });

  return [...newPaths1, ...newPaths2];
}
