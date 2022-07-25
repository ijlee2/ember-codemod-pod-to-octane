import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/app/route-routes.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-routes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/route.js', 'app/routes/application.js'],
    ['app/form/route.js', 'app/routes/form.js'],
    ['app/index/route.js', 'app/routes/index.js'],
    ['app/product-details/route.js', 'app/routes/product-details.js'],
    ['app/products/product/route.js', 'app/routes/products/product.js'],
    ['app/products/route.js', 'app/routes/products.js'],
  ]);
});
