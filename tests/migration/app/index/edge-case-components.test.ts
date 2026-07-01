import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateApp } from '../../../../src/migration/app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app/edge-case-components/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/app/edge-case-components.js';

test('migration | app | index > edge-case-components', function () {
  loadFixture(inputProject, codemodOptions);

  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
