import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('tests/unit', podPath);

  const filePaths = findFiles(`${podDir}/**/service-test.{js,ts}`, {
    ignoreList: [normalizedJoin('tests/unit', podPath, 'services/**')],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `tests/unit/services/${dir}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
