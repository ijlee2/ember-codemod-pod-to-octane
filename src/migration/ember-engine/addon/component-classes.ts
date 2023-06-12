import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  OptionsWithProjectName,
} from '../../../types/index.js';

export function migrationStrategyForComponentClasses(
  options: OptionsWithProjectName,
): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/components/**/component.{d.ts,js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon/components',
        file: 'component',
      },
      replace: (key: string) => {
        return `addon/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
