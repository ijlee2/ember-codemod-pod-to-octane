import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | tests | route-routes > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteRoutes(projectRoot), [
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
