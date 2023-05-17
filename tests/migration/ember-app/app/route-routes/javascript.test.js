import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/app/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | route-routes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

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
