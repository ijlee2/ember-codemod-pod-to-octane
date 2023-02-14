import { moveFiles } from '../../utils/files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import { createOptions } from './steps/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberEngine(codemodOptions) {
  const options = createOptions(codemodOptions);

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
