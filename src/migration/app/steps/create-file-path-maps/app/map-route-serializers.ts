import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteSerializers(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(join('app', podPath, '**/serializer.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: join('app', podPath),
      replace: (key: string) => {
        return `app/serializers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
