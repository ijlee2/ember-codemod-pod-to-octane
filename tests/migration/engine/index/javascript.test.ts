import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateEngine } from '../../../../src/migration/engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine/javascript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/engine/javascript.js';

test('migration | engine | index > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
