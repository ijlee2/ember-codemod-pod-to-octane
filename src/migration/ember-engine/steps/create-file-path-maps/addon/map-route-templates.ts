import { findFiles, renamePathByFile } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';

export function mapRouteTemplates(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const filePaths = findFiles('addon/!(components)/**/template.hbs', {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'addon',
        file: 'template',
      },
      replace: (key: string) => {
        return `addon/templates/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
