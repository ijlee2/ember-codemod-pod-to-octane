import { moveFiles } from '@codemod-utils/files';

import type { CodemodOptions } from '../../types/index.js';
import { createFilePathMaps, createOptions } from './steps/index.js';

export function migrateApp(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  if (options.testRun) {
    console.log(filePathMaps);

    return;
  }

  moveFiles(filePathMaps.app, options);
  moveFiles(filePathMaps.tests, options);
}
