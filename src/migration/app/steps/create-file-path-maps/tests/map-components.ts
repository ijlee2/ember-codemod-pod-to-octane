import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponents(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = join('tests/integration', podPath, 'components');

  const filePaths = findFiles(`${podDir}/**/component-test.{js,ts}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: podDir,
      replace: (key: string) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
