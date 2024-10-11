import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/app/steps/index.js';
import { inputProject } from '../../../../fixtures/app/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/app/sass.js';

test('migration | app | steps | create-options > sass', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
