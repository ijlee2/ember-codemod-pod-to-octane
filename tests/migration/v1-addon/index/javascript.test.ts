import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateV1Addon } from '../../../../src/migration/v1-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-addon/javascript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-v1-addon/javascript.js';

test('migration | v1-addon | index > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateV1Addon(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
