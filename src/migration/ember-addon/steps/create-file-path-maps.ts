import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { migrationStrategyForAddonFolder } from '../addon/index.js';
import { migrationStrategyForAppFolder } from '../app/index.js';
import { migrationStrategyForTestsFolder } from '../tests/index.js';

type MigrationStrategies = {
  addon: FilePathMap;
  app: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): MigrationStrategies {
  const filePathMapAddon = migrationStrategyForAddonFolder(options);
  const filePathMapApp = migrationStrategyForAppFolder(options);
  const filePathMapTests = migrationStrategyForTestsFolder(options);

  return {
    addon: filePathMapAddon,
    app: filePathMapApp,
    tests: filePathMapTests,
  };
}
