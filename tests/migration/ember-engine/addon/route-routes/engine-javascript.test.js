import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/addon/route-routes.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | addon | route-routes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/route.js', 'addon/routes/product-details.js'],
    ['addon/products/product/route.js', 'addon/routes/products/product.js'],
    ['addon/products/route.js', 'addon/routes/products.js'],
  ]);
});
