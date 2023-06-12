import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  OptionsWithProjectName,
} from '../../../types/index.js';

export function migrationStrategyForComponentTemplates(
  options: OptionsWithProjectName,
): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/components/**/template.hbs', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon/components',
        file: 'template',
      },
      replace: (key: string) => {
        return `addon/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
