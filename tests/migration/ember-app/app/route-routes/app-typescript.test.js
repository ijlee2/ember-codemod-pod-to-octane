import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/app/route-routes.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-routes > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/route.ts', 'app/routes/application.ts'],
    ['app/form/route.ts', 'app/routes/form.ts'],
    ['app/index/route.ts', 'app/routes/index.ts'],
    ['app/product-details/route.ts', 'app/routes/product-details.ts'],
    ['app/products/product/route.ts', 'app/routes/products/product.ts'],
    ['app/products/route.ts', 'app/routes/products.ts'],
  ]);
});
