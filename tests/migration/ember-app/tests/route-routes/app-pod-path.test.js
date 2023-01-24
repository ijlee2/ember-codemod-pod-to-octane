import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | route-routes > podPath', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/pods/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    ['tests/unit/pods/form/route-test.js', 'tests/unit/routes/form-test.js'],
    ['tests/unit/pods/index/route-test.js', 'tests/unit/routes/index-test.js'],
    [
      'tests/unit/pods/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/pods/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    [
      'tests/unit/pods/products/route-test.js',
      'tests/unit/routes/products-test.js',
    ],
    [
      'tests/unit/pods/routes/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    [
      'tests/unit/pods/routes/form/route-test.js',
      'tests/unit/routes/form-test.js',
    ],
    [
      'tests/unit/pods/routes/index/route-test.js',
      'tests/unit/routes/index-test.js',
    ],
    [
      'tests/unit/pods/routes/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/pods/routes/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    [
      'tests/unit/pods/routes/products/route-test.js',
      'tests/unit/routes/products-test.js',
    ],
  ]);
});
