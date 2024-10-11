import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateEngine } from '../../../../src/migration/engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-engine/sass/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-engine/sass.js';

test('migration | engine | index > sass', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
