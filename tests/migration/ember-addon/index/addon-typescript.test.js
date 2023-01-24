import { migrateEmberAddon } from '../../../../src/migration/ember-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/addon-typescript.js';
import { options } from '../../../helpers/shared-test-setups/ember-addon/typescript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-addon | index > TypeScript', function () {
  loadFixture(inputProject, options);

  migrateEmberAddon(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberAddon(options);

  assertFixture(outputProject, options);
});
