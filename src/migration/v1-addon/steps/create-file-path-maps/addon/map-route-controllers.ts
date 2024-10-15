import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon';

  const filePaths = findFiles(`${podDir}/**/controller.{js,ts}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: podDir,
      replace: (key: string) => {
        return `addon/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
