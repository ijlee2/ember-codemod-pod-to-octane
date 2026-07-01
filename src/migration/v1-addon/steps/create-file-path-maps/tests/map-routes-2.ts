import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

/*
  Case 2: Passed the --pod flag to Ember CLI
*/
export function mapRoutes2(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDirForController = 'tests/unit/controllers';

  const filePathsForController = findFiles(
    `${podDirForController}/**/controller-test.{js,ts}`,
    {
      projectRoot,
    },
  );

  const podDirForRoute = 'tests/unit/routes';

  const filePathsForRoute = findFiles(
    `${podDirForRoute}/**/route-test.{js,ts}`,
    {
      projectRoot,
    },
  );

  return [
    ...(filePathsForController.map((oldFilePath) => {
      const newFilePath = renamePodPath(oldFilePath, {
        podDir: podDirForController,
        replace: (dir: string) => {
          return `tests/unit/controllers/${dir}-test`;
        },
      });

      return [oldFilePath, newFilePath];
    }) as FilePathMapEntries),
    ...(filePathsForRoute.map((oldFilePath) => {
      const newFilePath = renamePodPath(oldFilePath, {
        podDir: podDirForRoute,
        replace: (dir: string) => {
          return `tests/unit/routes/${dir}-test`;
        },
      });

      return [oldFilePath, newFilePath];
    }) as FilePathMapEntries),
  ];
}
