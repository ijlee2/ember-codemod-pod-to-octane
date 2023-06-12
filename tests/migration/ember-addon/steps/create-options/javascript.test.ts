import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-addon/javascript.js';

test('migration | ember-addon | steps | create-options > javascript', function () {
  const inputProject = {
    'package.json': JSON.stringify(
      {
        name: '@ijlee2/ember-workshop-addon',
        version: '0.0.0',
      },
      null,
      2,
    ),
  };

  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
