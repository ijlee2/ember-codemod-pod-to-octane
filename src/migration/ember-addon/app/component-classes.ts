import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type { FilePathMapEntries, Options } from '../../../types/index.js';

export function migrationStrategyForComponentClasses(
  options: Options,
): FilePathMapEntries {
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
      replace: (key: string) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
