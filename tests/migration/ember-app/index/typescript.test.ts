import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-app/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | index > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEmberApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEmberApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
