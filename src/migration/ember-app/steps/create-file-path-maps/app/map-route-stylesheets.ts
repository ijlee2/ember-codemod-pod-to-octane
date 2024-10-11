import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteStylesheets(options: Options): FilePathMapEntries {
  const { pod, podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('app', podPath, pod, '**', 'styles.{css,scss}'),
    {
      ignoreList: [join('app', podPath, 'components', pod, '**')],
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: join('app', podPath),
      replace: (key: string) => {
        return `app/styles/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
