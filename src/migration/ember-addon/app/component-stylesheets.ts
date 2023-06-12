import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('app/components/**/styles.js', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'app/components',
        file: 'styles',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
