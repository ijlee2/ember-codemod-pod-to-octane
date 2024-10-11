import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateV1Addon } from '../../../../src/migration/v1-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/v1-addon/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | index > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
