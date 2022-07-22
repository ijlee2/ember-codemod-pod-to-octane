import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/addon/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | addon | route-routes > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteRoutes(projectRoot), [
    ['addon/product-details/route.ts', 'addon/routes/product-details.ts'],
    ['addon/products/product/route.ts', 'addon/routes/products/product.ts'],
    ['addon/products/route.ts', 'addon/routes/products.ts'],
  ]);
});
