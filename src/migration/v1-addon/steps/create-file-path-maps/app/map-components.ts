import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapComponents(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'app/components';

  const filePathsForClass = findFiles(`${podDir}/**/component.js`, {
    projectRoot,
  });

  const filePathsForTemplate = findFiles(`${podDir}/**/template.js`, {
    projectRoot,
  });

  return [...filePathsForClass, ...filePathsForTemplate].map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `app/components/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
