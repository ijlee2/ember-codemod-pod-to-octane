import { findFiles, parseFilePath } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

type FileName =
  | 'adapter'
  | 'controller'
  | 'model'
  | 'route'
  | 'serializer'
  | 'styles'
  | 'template';

function getFileName(filePath: string): FileName {
  const { name } = parseFilePath(filePath);

  return name as FileName;
}

export function mapRoutes(
  filePathsForComponents: string[],
  options: Options,
): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('app', podPath);

  const filePathsForAdapter = findFiles(`${podDir}/**/adapter.{js,ts}`, {
    projectRoot,
  });

  const filePathsForController = findFiles(`${podDir}/**/controller.{js,ts}`, {
    projectRoot,
  });

  const filePathsForModel = findFiles(`${podDir}/**/model.{js,ts}`, {
    projectRoot,
  });

  const filePathsForRoute = findFiles(`${podDir}/**/route.{js,ts}`, {
    projectRoot,
  });

  const filePathsForSerializer = findFiles(`${podDir}/**/serializer.{js,ts}`, {
    projectRoot,
  });

  const filePathsForStylesheet = findFiles(`${podDir}/**/styles.{css,scss}`, {
    ignoreList: filePathsForComponents,
    projectRoot,
  });

  const filePathsForTemplate = findFiles(`${podDir}/**/template.hbs`, {
    ignoreList: filePathsForComponents,
    projectRoot,
  });

  return [
    ...filePathsForAdapter,
    ...filePathsForController,
    ...filePathsForModel,
    ...filePathsForRoute,
    ...filePathsForSerializer,
    ...filePathsForStylesheet,
    ...filePathsForTemplate,
  ].map((oldFilePath) => {
    const fileName = getFileName(oldFilePath);

    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        switch (fileName) {
          case 'adapter': {
            return `app/adapters/${dir}`;
          }

          case 'controller': {
            return `app/controllers/${dir}`;
          }

          case 'model': {
            return `app/models/${dir}`;
          }

          case 'route': {
            return `app/routes/${dir}`;
          }

          case 'serializer': {
            return `app/serializers/${dir}`;
          }

          case 'styles': {
            return `app/styles/${dir}`;
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
