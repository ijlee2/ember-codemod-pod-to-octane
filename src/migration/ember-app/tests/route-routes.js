import { join } from 'node:path';

import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
  const { podPath, projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const oldPaths1 = findFiles(
    join('tests/unit', podPath, '!(routes)', '**', 'route-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  const newPaths1 = oldPaths1.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('tests/unit', podPath),
        file: 'route-test',
      },
      replace: (key) => {
        return `tests/unit/routes/${key}-test`;
      },
    });

    return [oldPath, newPath];
  });

  /*
    Case 2: Passed the --pod flag to Ember CLI
  */
  const oldPaths2 = findFiles(
    join('tests/unit', podPath, 'routes/**/route-test.{js,ts}'),
    {
      projectRoot,
    },
  );

  const newPaths2 = oldPaths2.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('tests/unit', podPath, 'routes'),
        file: 'route-test',
      },
      replace: (key) => {
        return `tests/unit/routes/${key}-test`;
      },
    });

    return [oldPath, newPath];
  });

  return [...newPaths1, ...newPaths2];
}
