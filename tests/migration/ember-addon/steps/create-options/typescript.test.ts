import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-addon/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-addon/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-addon/typescript.js';

test('migration | ember-addon | steps | create-options > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
