import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/styles.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'app/components',
        file: 'styles',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
