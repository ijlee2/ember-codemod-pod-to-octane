import { moveFiles } from '../../utils/move-files.js';
import { migrationStrategyForAppFolder } from './app/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberApp(options) {
  const { projectRoot, testRun } = options;

  const migrationStrategyApp = migrationStrategyForAppFolder(projectRoot);
  const migrationStrategyTests = migrationStrategyForTestsFolder(projectRoot);

  if (testRun) {
    console.log({
      migrationStrategyApp,
      migrationStrategyTests,
    });

    return;
  }

  moveFiles({
    migrationStrategy: migrationStrategyApp,
    projectRoot,
  });

  moveFiles({
    migrationStrategy: migrationStrategyTests,
    projectRoot,
  });
}
