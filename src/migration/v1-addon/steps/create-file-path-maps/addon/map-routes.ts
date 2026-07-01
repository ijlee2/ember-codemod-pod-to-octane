import { findFiles, parseFilePath } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

type FileName = 'controller' | 'route' | 'styles' | 'template';

function getFileName(filePath: string): FileName {
  const { name } = parseFilePath(filePath);

  return name as FileName;
}

export function mapRoutes(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'addon';

  const filePathsForController = findFiles(`${podDir}/**/controller.{js,ts}`, {
    projectRoot,
  });

  const filePathsForRoute = findFiles(`${podDir}/**/route.{js,ts}`, {
    projectRoot,
  });

  const filePathsForStylesheet = findFiles(`${podDir}/**/styles.{css,scss}`, {
    ignoreList: ['addon/components/**'],
    projectRoot,
  });

  const filePathsForTemplate = findFiles(`${podDir}/**/template.hbs`, {
    ignoreList: ['addon/components/**'],
    projectRoot,
  });

  return [
    ...filePathsForController,
    ...filePathsForRoute,
    ...filePathsForStylesheet,
    ...filePathsForTemplate,
  ].map((oldFilePath) => {
    const fileName = getFileName(oldFilePath);

    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        switch (fileName) {
          case 'controller': {
            return `addon/controllers/${dir}`;
          }

          case 'route': {
            return `addon/routes/${dir}`;
          }

          case 'styles': {
            return `addon/styles/${dir}`;
          }

          case 'template': {
            return `addon/templates/${dir}`;
          }
        }
      },
    });

    return [oldFilePath, newFilePath];
  });
}
