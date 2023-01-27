import { migrateEmberAddon } from '../../../../src/migration/ember-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-addon/javascript/index.js';
import { options } from '../../../helpers/shared-test-setups/ember-addon/javascript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-addon | index > javascript', function () {
  loadFixture(inputProject, options);

  migrateEmberAddon(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberAddon(options);

  assertFixture(outputProject, options);
});
