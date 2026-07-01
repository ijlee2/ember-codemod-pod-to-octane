import { findFiles, parseFilePath } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

type FileName = 'controller' | 'route' | 'template';

function getFileName(filePath: string): FileName {
  const { name } = parseFilePath(filePath);

  return name as FileName;
}

export function mapRoutes(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'app';

  const filePathsForController = findFiles(`${podDir}/**/controller.js`, {
    projectRoot,
  });

  const filePathsForRoute = findFiles(`${podDir}/**/route.js`, {
    projectRoot,
  });

  const filePathsForTemplate = findFiles(`${podDir}/**/template.js`, {
    ignoreList: ['app/components/**'],
    projectRoot,
  });

  return [
    ...filePathsForController,
    ...filePathsForRoute,
    ...filePathsForTemplate,
  ].map((oldFilePath) => {
    const fileName = getFileName(oldFilePath);

    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        switch (fileName) {
          case 'controller': {
            return `app/controllers/${dir}`;
          }

          case 'route': {
            return `app/routes/${dir}`;
          }

          case 'template': {
            return `app/templates/${dir}`;
          }
        }
      },
    });

    return [oldFilePath, newFilePath];
  });
}
