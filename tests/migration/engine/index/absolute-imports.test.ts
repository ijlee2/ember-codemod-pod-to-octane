import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateEngine } from '../../../../src/migration/engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine/absolute-imports/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/engine/absolute-imports.js';

test('migration | engine | index > absolute-imports', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
