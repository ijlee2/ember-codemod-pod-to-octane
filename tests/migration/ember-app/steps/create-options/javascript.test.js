import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-app/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | steps | create-options > javascript', function () {
  const inputProject = {
    'package.json': JSON.stringify(
      {
        name: '@ijlee2/ember-workshop-app',
        version: '0.0.0',
      },
      null,
      2,
    ),
  };

  loadFixture(inputProject, codemodOptions);

  assert.deepEqual(createOptions(codemodOptions), options);
});
