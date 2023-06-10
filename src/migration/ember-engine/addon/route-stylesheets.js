import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/!(components)/**/styles.{css,scss}', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'addon',
        file: 'styles',
      },
      replace: (key) => {
        return `addon/styles/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
