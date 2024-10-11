import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateApp } from '../../../../src/migration/app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-app/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | app | index > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
