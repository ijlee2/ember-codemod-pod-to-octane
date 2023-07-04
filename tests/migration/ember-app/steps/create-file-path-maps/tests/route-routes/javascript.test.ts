import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteRoutes } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/tests/route-routes.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | tests | route-routes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteRoutes(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    ['tests/unit/form/route-test.js', 'tests/unit/routes/form-test.js'],
    ['tests/unit/index/route-test.js', 'tests/unit/routes/index-test.js'],
    [
      'tests/unit/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    ['tests/unit/products/route-test.js', 'tests/unit/routes/products-test.js'],
    [
      'tests/unit/routes/application/route-test.js',
      'tests/unit/routes/application-test.js',
    ],
    ['tests/unit/routes/form/route-test.js', 'tests/unit/routes/form-test.js'],
    [
      'tests/unit/routes/index/route-test.js',
      'tests/unit/routes/index-test.js',
    ],
    [
      'tests/unit/routes/product-details/route-test.js',
      'tests/unit/routes/product-details-test.js',
    ],
    [
      'tests/unit/routes/products/product/route-test.js',
      'tests/unit/routes/products/product-test.js',
    ],
    [
      'tests/unit/routes/products/route-test.js',
      'tests/unit/routes/products-test.js',
    ],
  ]);
});
