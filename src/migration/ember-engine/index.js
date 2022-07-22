import { moveFiles } from '../../utils/move-files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberEngine(options) {
  const { projectRoot, testRun } = options;

  const migrationStrategyAddon = migrationStrategyForAddonFolder(projectRoot);
  const migrationStrategyTests = migrationStrategyForTestsFolder(projectRoot);

  if (testRun) {
    console.log({
      migrationStrategyAddon,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles({
    migrationStrategy: migrationStrategyAddon,
    projectRoot,
  });

  moveFiles({
    migrationStrategy: migrationStrategyTests,
    projectRoot,
  });
}
