import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/!(components)/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
