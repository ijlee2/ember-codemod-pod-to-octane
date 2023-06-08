import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'styles',
      },
      replace: (key) => {
        return `addon/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
