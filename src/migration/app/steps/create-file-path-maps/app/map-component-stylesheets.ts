import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponentStylesheets(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = join('app', podPath, 'components');

  const filePaths = findFiles(`${podDir}/**/styles.{css,scss}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: podDir,
      replace: (key: string) => {
        return `app/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
