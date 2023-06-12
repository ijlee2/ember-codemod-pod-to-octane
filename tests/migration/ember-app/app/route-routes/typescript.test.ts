import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/app/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | route-routes > typescript', function () {
  loadFixture(inputProject, codemodOptions);

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
