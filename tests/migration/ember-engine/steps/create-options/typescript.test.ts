import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-engine/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | steps | create-options > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
