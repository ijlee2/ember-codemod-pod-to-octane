import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-engine/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | tests | route-routes > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/product-details/route-test.ts',
      'tests/unit/routes/product-details-test.ts',
    ],
    [
      'tests/unit/products/product/route-test.ts',
      'tests/unit/routes/products/product-test.ts',
    ],
    ['tests/unit/products/route-test.ts', 'tests/unit/routes/products-test.ts'],
    [
      'tests/unit/routes/product-details/route-test.ts',
      'tests/unit/routes/product-details-test.ts',
    ],
    [
      'tests/unit/routes/products/product/route-test.ts',
      'tests/unit/routes/products/product-test.ts',
    ],
    [
      'tests/unit/routes/products/route-test.ts',
      'tests/unit/routes/products-test.ts',
    ],
  ]);
});
