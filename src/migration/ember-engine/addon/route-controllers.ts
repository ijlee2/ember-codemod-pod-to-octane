import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteControllers(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/controller.{js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'controller',
      },
      replace: (key) => {
        return `addon/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
