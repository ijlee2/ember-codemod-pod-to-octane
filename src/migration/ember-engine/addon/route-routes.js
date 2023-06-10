import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/**/route.{js,ts}', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'addon',
        file: 'route',
      },
      replace: (key) => {
        return `addon/routes/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
