import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/template.js', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'app/components',
        file: 'template',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
