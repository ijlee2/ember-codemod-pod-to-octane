import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteStylesheets(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/!(components)/**/styles.{css,scss}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'styles',
      },
      replace: (key) => {
        return `addon/styles/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
