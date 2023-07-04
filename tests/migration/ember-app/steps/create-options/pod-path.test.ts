import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-app/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | steps | create-options > pod-path', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
