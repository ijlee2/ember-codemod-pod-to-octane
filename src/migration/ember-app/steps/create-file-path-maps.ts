import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { migrationStrategyForAppFolder } from './create-file-path-maps/app/index.js';
import { migrationStrategyForTestsFolder } from './create-file-path-maps/tests/index.js';

type MigrationStrategies = {
  app: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): MigrationStrategies {
  const filePathMapApp = migrationStrategyForAppFolder(options);
  const filePathMapTests = migrationStrategyForTestsFolder(options);

  return {
    app: filePathMapApp,
    tests: filePathMapTests,
  };
}
