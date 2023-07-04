import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function mapComponentStylesheets(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/components/**/styles.{css,scss}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon/components',
        file: 'styles',
      },
      replace: (key: string) => {
        return `addon/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
