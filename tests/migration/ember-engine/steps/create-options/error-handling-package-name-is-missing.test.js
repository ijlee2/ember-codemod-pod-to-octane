import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../../../src/migration/ember-engine/steps/index.js';
import { codemodOptions } from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | steps | create-options > error handling (package name is missing)', function () {
  const inputProject = {
    'package.json': '{}',
  };

  loadFixture(inputProject, codemodOptions);

  assert.throws(
    () => {
      createOptions(codemodOptions);
    },
    (error) => {
      assert.strictEqual(
        error.message,
        'ERROR: package.json is missing or is not valid. (Package name is missing.)\n',
      );

      return true;
    },
  );
});
