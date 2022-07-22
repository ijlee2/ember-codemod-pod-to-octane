import { migrateEmberAddon } from '../../../../src/migration/ember-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/addon-typescript.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/addon-typescript';

test('migration | ember-addon | index > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  migrateEmberAddon({
    projectRoot,
    testRun: false,
  });

  assertFixture(projectRoot, outputProject);

  // Check idempotence
  migrateEmberAddon({
    projectRoot,
    testRun: false,
  });

  assertFixture(projectRoot, outputProject);
});
