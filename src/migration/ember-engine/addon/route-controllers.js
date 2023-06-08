import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteControllers(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/**/controller.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
