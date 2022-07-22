import { moveFiles } from '../../utils/move-files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { migrationStrategyForAppFolder } from './app/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberAddon(options) {
  const { projectRoot, testRun } = options;

  const migrationStrategyAddon = migrationStrategyForAddonFolder(projectRoot);
  const migrationStrategyApp = migrationStrategyForAppFolder(projectRoot);
  const migrationStrategyTests = migrationStrategyForTestsFolder(projectRoot);

  if (testRun) {
    console.log({
      migrationStrategyAddon,
      migrationStrategyApp,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles({
    migrationStrategy: migrationStrategyAddon,
    projectRoot,
  });

  moveFiles({
    migrationStrategy: migrationStrategyApp,
    projectRoot,
  });

  moveFiles({
    migrationStrategy: migrationStrategyTests,
    projectRoot,
  });
}
