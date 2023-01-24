import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/addon/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | route-routes > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/route.ts', 'addon/routes/product-details.ts'],
    ['addon/products/product/route.ts', 'addon/routes/products/product.ts'],
    ['addon/products/route.ts', 'addon/routes/products.ts'],
  ]);
});
