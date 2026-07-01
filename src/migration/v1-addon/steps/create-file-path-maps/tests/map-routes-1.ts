import { findFiles, parseFilePath } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

type FileName = 'controller-test' | 'route-test';

function getFileName(filePath: string): FileName {
  const { name } = parseFilePath(filePath);

  return name as FileName;
}

/*
  Case 1: Didn't pass the --pod flag, but configured { usePods: true } in .ember-cli
*/
export function mapRoutes1(options: Options): FilePathMapEntries {
  const { projectRoot } = options;

  const podDir = 'tests/unit';

  const filePathsForController = findFiles(
    `${podDir}/**/controller-test.{js,ts}`,
    {
      ignoreList: ['tests/unit/controllers/**'],
      projectRoot,
    },
  );

  const filePathsForRoute = findFiles(`${podDir}/**/route-test.{js,ts}`, {
    ignoreList: ['tests/unit/routes/**'],
    projectRoot,
  });

  return [...filePathsForController, ...filePathsForRoute].map(
    (oldFilePath) => {
      const fileName = getFileName(oldFilePath);

      const newFilePath = renamePodPath(oldFilePath, {
        podDir,
        replace: (dir: string) => {
          switch (fileName) {
            case 'controller-test': {
              return `tests/unit/controllers/${dir}-test`;
            }

            case 'route-test': {
              return `tests/unit/routes/${dir}-test`;
            }
          }
        },
      });

      return [oldFilePath, newFilePath];
    },
  );
}
