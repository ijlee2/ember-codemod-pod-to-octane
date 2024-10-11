import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/engine/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-engine/relative-imports/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/relative-imports.js';

test('migration | engine | steps | create-options > relative-imports', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
