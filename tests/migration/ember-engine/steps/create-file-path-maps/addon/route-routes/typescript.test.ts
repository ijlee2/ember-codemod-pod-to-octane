import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../../../src/migration/ember-engine/steps/create-file-path-maps/addon/route-routes.js';
import { inputProject } from '../../../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | addon | route-routes > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/route.ts', 'addon/routes/product-details.ts'],
    ['addon/products/product/route.ts', 'addon/routes/products/product.ts'],
    ['addon/products/route.ts', 'addon/routes/products.ts'],
  ]);
});
