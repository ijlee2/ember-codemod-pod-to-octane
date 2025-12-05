import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponentTemplates(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon/components';

  const filePaths = findFiles(`${podDir}/**/template.hbs`, {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `addon/components/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
