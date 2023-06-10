import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/template.hbs', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'template',
      },
      replace: (key) => {
        return `addon/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
