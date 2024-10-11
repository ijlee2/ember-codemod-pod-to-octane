import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateEngine } from '../../../../src/migration/engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-engine/relative-imports/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-engine/relative-imports.js';

test('migration | engine | index > relative-imports', function () {
  loadFixture(inputProject, codemodOptions);

  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateEngine(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
