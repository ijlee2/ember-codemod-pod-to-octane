import { moveFiles } from '@codemod-utils/files';

import type { CodemodOptions } from '../../types/index.js';
import { migrationStrategyForAppFolder } from './app/index.js';
import { createOptions } from './steps/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberApp(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const migrationStrategyApp = migrationStrategyForAppFolder(options);
  const migrationStrategyTests = migrationStrategyForTestsFolder(options);

  if (options.testRun) {
    console.log({
      migrationStrategyApp,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles(migrationStrategyApp, options);
  moveFiles(migrationStrategyTests, options);
}
