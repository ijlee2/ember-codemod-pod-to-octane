import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-engine/sass/index.js';
import { options } from '../../../helpers/shared-test-setups/ember-engine/sass.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-engine | index > sass', function () {
  loadFixture(inputProject, options);

  migrateEmberEngine(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberEngine(options);

  assertFixture(outputProject, options);
});
