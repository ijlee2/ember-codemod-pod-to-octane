import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/engine/steps/index.js';
import { inputProject } from '../../../../fixtures/engine/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/engine/sass.js';

test('migration | engine | steps | create-options > sass', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
