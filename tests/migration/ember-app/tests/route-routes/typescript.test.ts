import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../src/migration/ember-app/tests/route-routes.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | tests | route-routes > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/application/route-test.ts',
      'tests/unit/routes/application-test.ts',
    ],
    ['tests/unit/form/route-test.ts', 'tests/unit/routes/form-test.ts'],
    ['tests/unit/index/route-test.ts', 'tests/unit/routes/index-test.ts'],
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
      'tests/unit/routes/application/route-test.ts',
      'tests/unit/routes/application-test.ts',
    ],
    ['tests/unit/routes/form/route-test.ts', 'tests/unit/routes/form-test.ts'],
    [
      'tests/unit/routes/index/route-test.ts',
      'tests/unit/routes/index-test.ts',
    ],
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
