import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/app/route-routes.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-routes > podPath', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/application/route.js', 'app/routes/application.js'],
    ['app/pods/form/route.js', 'app/routes/form.js'],
    ['app/pods/index/route.js', 'app/routes/index.js'],
    ['app/pods/product-details/route.js', 'app/routes/product-details.js'],
    ['app/pods/products/product/route.js', 'app/routes/products/product.js'],
    ['app/pods/products/route.js', 'app/routes/products.js'],
  ]);
});
