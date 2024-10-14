import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('tests/unit/**/service-test.{js,ts}', {
    ignoreList: ['tests/unit/services/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: 'tests/unit',
      replace: (key: string) => {
        return `tests/unit/services/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
