import { updatePaths } from '../../utils/ember-addon/app/components.js';
import { moveFiles } from '../../utils/move-files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { migrationStrategyForAppFolder } from './app/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberAddon(options) {
  const migrationStrategyAddon = migrationStrategyForAddonFolder(options);
  const migrationStrategyApp = migrationStrategyForAppFolder(options);
  const migrationStrategyTests = migrationStrategyForTestsFolder(options);

  if (options.testRun) {
    console.log({
      migrationStrategyAddon,
      migrationStrategyApp,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles(migrationStrategyAddon, options);
  moveFiles(migrationStrategyApp, options);
  moveFiles(migrationStrategyTests, options);

  updatePaths(migrationStrategyApp, options);
}
