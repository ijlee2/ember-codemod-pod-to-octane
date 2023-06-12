import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('app/components/**/template.js', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'app/components',
        file: 'template',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
