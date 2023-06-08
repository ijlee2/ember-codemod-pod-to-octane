import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/component.{d.ts,js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
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
