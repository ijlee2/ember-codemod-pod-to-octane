import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/app/steps/index.js';
import { inputProject } from '../../../../fixtures/app/edge-case-components/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/app/edge-case-components.js';

test('migration | app | steps | create-options > edge-case-components', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
