import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/controller.{js,ts}', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: 'addon',
      replace: (key: string) => {
        return `addon/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
