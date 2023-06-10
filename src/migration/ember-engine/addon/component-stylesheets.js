import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/styles.{css,scss}', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'styles',
      },
      replace: (key) => {
        return `addon/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
