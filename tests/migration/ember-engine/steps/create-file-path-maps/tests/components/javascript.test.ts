import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponents } from '../../../../../../../src/migration/ember-engine/steps/create-file-path-maps/tests/components.js';
import { inputProject } from '../../../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | tests | components > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/integration/components/product/card/component-test.js',
      'tests/integration/components/product/card-test.js',
    ],
    [
      'tests/integration/components/product/details/component-test.js',
      'tests/integration/components/product/details-test.js',
    ],
    [
      'tests/integration/components/product/image/component-test.js',
      'tests/integration/components/product/image-test.js',
    ],
  ]);
});
