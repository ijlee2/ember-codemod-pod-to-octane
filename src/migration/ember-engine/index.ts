import { moveFiles } from '@codemod-utils/files';

import type { CodemodOptions } from '../../types/index.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { createOptions } from './steps/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberEngine(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const migrationStrategyAddon = migrationStrategyForAddonFolder(options);
  const migrationStrategyTests = migrationStrategyForTestsFolder(options);

  const migrationStrategy = new Map([
    ...migrationStrategyAddon,
    ...migrationStrategyTests,
  ]);

  if (options.testRun) {
    console.log(migrationStrategy);

    return;
  }

  // Preserve code
  moveFiles(migrationStrategyAddon, options);
  moveFiles(migrationStrategyTests, options);
}
