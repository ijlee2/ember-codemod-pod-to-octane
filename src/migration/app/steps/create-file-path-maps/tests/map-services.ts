import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = join('tests/unit', podPath);

  const filePaths = findFiles(`${podDir}/**/service-test.{js,ts}`, {
    ignoreList: [join('tests/unit', podPath, 'services/**')],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `tests/unit/services/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
