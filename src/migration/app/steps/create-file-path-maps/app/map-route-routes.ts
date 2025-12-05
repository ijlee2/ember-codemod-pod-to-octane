import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

export function mapRouteRoutes(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('app', podPath);

  const filePaths = findFiles(`${podDir}/**/route.{js,ts}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `app/routes/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
