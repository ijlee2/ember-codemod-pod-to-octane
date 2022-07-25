import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | tests | route-routes > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/product-details/route-test.ts',
      'tests/unit/routes/product-details-test.ts',
    ],
    [
      'tests/unit/products/product/route-test.ts',
      'tests/unit/routes/products/product-test.ts',
    ],
    ['tests/unit/products/route-test.ts', 'tests/unit/routes/products-test.ts'],
    [
      'tests/unit/routes/product-details/route-test.ts',
      'tests/unit/routes/product-details-test.ts',
    ],
    [
      'tests/unit/routes/products/product/route-test.ts',
      'tests/unit/routes/products/product-test.ts',
    ],
    [
      'tests/unit/routes/products/route-test.ts',
      'tests/unit/routes/products-test.ts',
    ],
  ]);
});
