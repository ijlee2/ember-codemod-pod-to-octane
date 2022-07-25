import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | tests | route-routes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    ['tests/unit/form/route-test.js', 'tests/unit/routes/form-test.js'],
    ['tests/unit/index/route-test.js', 'tests/unit/routes/index-test.js'],
    [
      'tests/unit/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    ['tests/unit/products/route-test.js', 'tests/unit/routes/products-test.js'],
    [
      'tests/unit/routes/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    ['tests/unit/routes/form/route-test.js', 'tests/unit/routes/form-test.js'],
    [
      'tests/unit/routes/index/route-test.js',
      'tests/unit/routes/index-test.js',
    ],
    [
      'tests/unit/routes/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/routes/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    [
      'tests/unit/routes/products/route-test.js',
      'tests/unit/routes/products-test.js',
    ],
  ]);
});
