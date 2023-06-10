import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/component.{d.ts,js,ts}', {
    projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'component',
      },
      replace: (key) => {
        return `addon/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
