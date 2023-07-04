import type { FilePathMap } from '@codemod-utils/files';

import type { Options } from '../../../types/index.js';
import { mapAddonFolder } from './create-file-path-maps/addon/index.js';
import { mapAppFolder } from './create-file-path-maps/app/index.js';
import { mapTestsFolder } from './create-file-path-maps/tests/index.js';

type FilePathMaps = {
  addon: FilePathMap;
  app: FilePathMap;
  tests: FilePathMap;
};

export function createFilePathMaps(options: Options): FilePathMaps {
  return {
    addon: mapAddonFolder(options),
    app: mapAppFolder(options),
    tests: mapTestsFolder(options),
  };
}
