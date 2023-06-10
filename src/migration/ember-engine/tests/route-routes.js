import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  /*
    Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
  */
  const oldPaths1 = findFiles('tests/unit/!(routes)/**/route-test.{js,ts}', {
    projectRoot,
  });

  const newPaths1 = oldPaths1.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'tests/unit',
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
  const oldPaths2 = findFiles('tests/unit/routes/**/route-test.{js,ts}', {
    projectRoot,
  });

  const newPaths2 = oldPaths2.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'tests/unit/routes',
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
