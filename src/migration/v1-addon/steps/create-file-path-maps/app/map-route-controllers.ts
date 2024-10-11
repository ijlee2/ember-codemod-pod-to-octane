import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteControllers(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('app/**/controller.js', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: 'app',
      replace: (key: string) => {
        return `app/controllers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
