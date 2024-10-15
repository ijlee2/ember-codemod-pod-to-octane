import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteRoutes(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'app';

  const filePaths = findFiles(`${podDir}/**/route.js`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `app/routes/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
