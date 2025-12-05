import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteTemplates(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon';

  const filePaths = findFiles(`${podDir}/**/template.hbs`, {
    ignoreList: ['addon/components/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `addon/templates/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
