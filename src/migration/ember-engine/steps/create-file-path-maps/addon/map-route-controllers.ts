import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/controller.{js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'controller',
      },
      replace: (key: string) => {
        return `addon/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
