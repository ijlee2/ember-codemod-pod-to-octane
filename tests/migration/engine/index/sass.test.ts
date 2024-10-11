import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateV1Addon } from '../../../../src/migration/v1-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine/sass/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/engine/sass.js';

test('migration | engine | index > sass', function () {
  loadFixture(inputProject, codemodOptions);

  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
