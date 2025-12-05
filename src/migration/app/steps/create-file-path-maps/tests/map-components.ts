import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

export function mapComponents(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('tests/integration', podPath, 'components');

  const filePaths = findFiles(`${podDir}/**/component-test.{js,ts}`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `tests/integration/components/${dir}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
