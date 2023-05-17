import { moveFiles } from '@codemod-utils/files';

import { migrationStrategyForAppFolder } from './app/index.js';
import { createOptions } from './steps/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberApp(codemodOptions) {
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
