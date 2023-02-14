import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-app/javascript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-app/javascript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-app | index > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEmberApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEmberApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
