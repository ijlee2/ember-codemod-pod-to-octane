import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  OptionsWithProjectName,
} from '../../../types/index.js';

export function migrationStrategyForComponents(
  options: OptionsWithProjectName,
): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'tests/integration/components',
        file: 'component-test',
      },
      replace: (key: string) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
