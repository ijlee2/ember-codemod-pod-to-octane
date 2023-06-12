import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | steps | create-options > typescript', function () {
  const inputProject = {
    'package.json': JSON.stringify(
      {
        name: '@ijlee2/ember-workshop-engine',
        version: '0.0.0',
      },
      null,
      2,
    ),
  };

  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
