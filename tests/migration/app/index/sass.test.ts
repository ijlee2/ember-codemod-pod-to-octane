import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateApp } from '../../../../src/migration/app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app/sass/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/app/sass.js';

test('migration | app | index > sass', function () {
  loadFixture(inputProject, codemodOptions);

  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
