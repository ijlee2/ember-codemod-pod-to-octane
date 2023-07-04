import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-app/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-app/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/sass.js';

test('migration | ember-app | steps | create-options > sass', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
