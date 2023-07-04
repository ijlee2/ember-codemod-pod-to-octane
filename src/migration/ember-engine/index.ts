import { moveFiles } from '@codemod-utils/files';

import type { CodemodOptions } from '../../types/index.js';
import { createFilePathMaps, createOptions } from './steps/index.js';

export function migrateEmberEngine(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  if (options.testRun) {
    console.log(filePathMaps);

    return;
  }

  // Preserve code
  moveFiles(filePathMaps.addon, options);
  moveFiles(filePathMaps.tests, options);
}
