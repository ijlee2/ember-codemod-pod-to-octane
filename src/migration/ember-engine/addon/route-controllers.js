import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteControllers(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/**/controller.{js,ts}', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'addon',
        file: 'controller',
      },
      replace: (key) => {
        return `addon/controllers/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
