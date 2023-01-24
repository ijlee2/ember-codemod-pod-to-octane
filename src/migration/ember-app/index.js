import { moveFiles } from '../../utils/files.js';
import { migrationStrategyForAppFolder } from './app/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberApp(options) {
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
