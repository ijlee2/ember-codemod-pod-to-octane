import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'app';

  const filePaths = findFiles(`${podDir}/**/service.js`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `app/services/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
