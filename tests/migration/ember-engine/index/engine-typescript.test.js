import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine-typescript.js';
import { options } from '../../../helpers/shared-test-setups/ember-engine/typescript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-engine | index > TypeScript', function () {
  loadFixture(inputProject, options);

  migrateEmberEngine(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberEngine(options);

  assertFixture(outputProject, options);
});
