import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { mapAppFolder } from './create-file-path-maps/app/index.js';
import { mapTestsFolder } from './create-file-path-maps/tests/index.js';

type MigrationStrategies = {
  app: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): MigrationStrategies {
  return {
    app: mapAppFolder(options),
    tests: mapTestsFolder(options),
  };
}
