import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForRouteTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/!(components)/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'addon',
        file: 'template',
      },
      replace: (key) => {
        return `addon/templates/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
