import { moveFiles } from '@codemod-utils/files';

import type { CodemodOptions } from '../../types/index.js';
import { updatePathsInAppFolder } from '../../utils/ember-addon/app/components.js';
import { createFilePathMaps, createOptions } from './steps/index.js';

export function migrateEmberAddon(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  if (options.testRun) {
    console.log(filePathMaps);

    return;
  }

  moveFiles(filePathMaps.addon, options);
  moveFiles(filePathMaps.app, options);
  moveFiles(filePathMaps.tests, options);

  updatePathsInAppFolder(filePathMaps.app, options);
}
