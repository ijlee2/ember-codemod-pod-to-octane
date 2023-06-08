import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/component.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'app/components',
        file: 'component',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
