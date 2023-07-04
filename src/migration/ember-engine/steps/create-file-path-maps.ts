import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { migrationStrategyForAddonFolder } from './create-file-path-maps/addon/index.js';
import { migrationStrategyForTestsFolder } from './create-file-path-maps/tests/index.js';

type MigrationStrategies = {
  addon: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): MigrationStrategies {
  const filePathMapAddon = migrationStrategyForAddonFolder(options);
  const filePathMapTests = migrationStrategyForTestsFolder(options);

  return {
    addon: filePathMapAddon,
    tests: filePathMapTests,
  };
}
