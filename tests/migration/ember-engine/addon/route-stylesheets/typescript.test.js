import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-engine/addon/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | addon | route-stylesheets > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/styles.css', 'addon/styles/product-details.css'],
    ['addon/products/product/styles.css', 'addon/styles/products/product.css'],
    ['addon/products/styles.css', 'addon/styles/products.css'],
  ]);
});
