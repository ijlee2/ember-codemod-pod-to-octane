import { moveFiles } from '../../utils/files.js';
import { migrationStrategyForAddonFolder } from './addon/index.js';
import {
  createOptions,
  updateAbsolutePaths,
  useAbsolutePaths,
  useRelativePaths,
} from './steps/index.js';
import { migrationStrategyForTestsFolder } from './tests/index.js';

export function migrateEmberEngine(codemodOptions) {
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

  // Prepare for migration
  useAbsolutePaths(options);

  // Preserve code
  moveFiles(migrationStrategyAddon, options);
  moveFiles(migrationStrategyTests, options);

  // Update import paths
  updateAbsolutePaths(migrationStrategy, options);
  useRelativePaths(options);
}
