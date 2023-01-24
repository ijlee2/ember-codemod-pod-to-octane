import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-engine/javascript/index.js';
import { options } from '../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-engine | index > javascript', function () {
  loadFixture(inputProject, options);

  migrateEmberEngine(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberEngine(options);

  assertFixture(outputProject, options);
});
