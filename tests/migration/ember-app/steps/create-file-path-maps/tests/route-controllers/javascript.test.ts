import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteControllers } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/tests/route-controllers.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | tests | route-controllers > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/form/controller-test.js',
      'tests/unit/controllers/form-test.js',
    ],
    [
      'tests/unit/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
    [
      'tests/unit/controllers/form/controller-test.js',
      'tests/unit/controllers/form-test.js',
    ],
    [
      'tests/unit/controllers/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
  ]);
});
