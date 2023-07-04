import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { mapAddonFolder } from './create-file-path-maps/addon/index.js';
import { mapTestsFolder } from './create-file-path-maps/tests/index.js';

type MigrationStrategies = {
  addon: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): MigrationStrategies {
  return {
    addon: mapAddonFolder(options),
    tests: mapTestsFolder(options),
  };
}
