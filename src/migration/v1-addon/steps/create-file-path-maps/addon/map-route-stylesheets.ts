import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteStylesheets(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon';

  const filePaths = findFiles(`${podDir}/**/styles.{css,scss}`, {
    ignoreList: ['addon/components/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `addon/styles/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
