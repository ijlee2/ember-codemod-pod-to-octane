import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-engine/relative-imports/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-engine/relative-imports.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-engine | index > relative-imports', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEmberEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEmberEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
