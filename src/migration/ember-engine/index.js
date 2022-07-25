import { moveFiles } from '../../utils/move-files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberEngine(options) {
  const migrationStrategyAddon = migrationStrategyForAddonFolder(options);
  const migrationStrategyTests = migrationStrategyForTestsFolder(options);

  if (options.testRun) {
    console.log({
      migrationStrategyAddon,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles(migrationStrategyAddon, options);
  moveFiles(migrationStrategyTests, options);
}
