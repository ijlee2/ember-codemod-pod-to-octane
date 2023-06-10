import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/component.js', {
    projectRoot,
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
