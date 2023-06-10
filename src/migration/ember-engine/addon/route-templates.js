import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteTemplates(options) {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/!(components)/**/template.hbs', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'template',
      },
      replace: (key) => {
        return `addon/templates/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
