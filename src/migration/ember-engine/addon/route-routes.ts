import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/route.{js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'route',
      },
      replace: (key) => {
        return `addon/routes/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
