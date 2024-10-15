import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponentStylesheets(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon/components';

  const filePaths = findFiles(`${podDir}/**/styles.{css,scss}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `addon/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
