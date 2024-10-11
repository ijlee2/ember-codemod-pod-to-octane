import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { migrateApp } from '../../../../src/migration/app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/ember-app/pod-path/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | app | index > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  migrateApp(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
