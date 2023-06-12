import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/addon/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | addon | route-routes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/route.js', 'addon/routes/product-details.js'],
    ['addon/products/product/route.js', 'addon/routes/products/product.js'],
    ['addon/products/route.js', 'addon/routes/products.js'],
  ]);
});
