import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/v1-addon/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-addon/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-v1-addon/typescript.js';

test('migration | v1-addon | steps | create-options > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
