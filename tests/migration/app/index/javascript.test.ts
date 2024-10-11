import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateApp } from '../../../../src/migration/app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app/javascript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/app/javascript.js';

test('migration | app | index > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
