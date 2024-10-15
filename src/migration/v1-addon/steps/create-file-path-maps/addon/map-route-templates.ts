import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteTemplates(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/**/template.hbs', {
    ignoreList: ['addon/components/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      entityDir: 'addon',
      replace: (key: string) => {
        return `addon/templates/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
