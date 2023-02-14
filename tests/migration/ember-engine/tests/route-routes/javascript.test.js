import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | tests | route-routes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

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
