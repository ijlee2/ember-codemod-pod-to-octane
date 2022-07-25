import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | tests | route-routes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
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
