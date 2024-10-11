import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/v1-addon/steps/index.js';
import { inputProject } from '../../../../fixtures/v1-addon/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/sass.js';

test('migration | v1-addon | steps | create-options > sass', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
