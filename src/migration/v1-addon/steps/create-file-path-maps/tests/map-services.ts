import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'tests/unit';

  const filePaths = findFiles(`${podDir}/**/service-test.{js,ts}`, {
    ignoreList: ['tests/unit/services/**'],
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
