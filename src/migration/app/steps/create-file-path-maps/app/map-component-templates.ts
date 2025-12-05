import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

export function mapComponentTemplates(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('app', podPath, 'components');

  const filePaths = findFiles(`${podDir}/**/template.hbs`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `app/components/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
