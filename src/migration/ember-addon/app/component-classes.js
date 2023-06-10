import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('app/components/**/component.js', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'app/components',
        file: 'component',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
