import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  OptionsWithProjectName,
} from '../../../types/index.js';

export function migrationStrategyForRouteRoutes(
  options: OptionsWithProjectName,
): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/route.{js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'route',
      },
      replace: (key: string) => {
        return `addon/routes/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
