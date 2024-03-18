import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponentTemplates(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/components/**/template.hbs', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: 'addon/components',
      replace: (key: string) => {
        return `addon/components/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
