import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | route-controllers > JavaScript', function () {
  loadFixture(inputProject, options);

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
