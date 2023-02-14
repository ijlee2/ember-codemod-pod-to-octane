import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-engine/addon/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/sass.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | route-stylesheets > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/styles.scss', 'addon/styles/product-details.scss'],
    [
      'addon/products/product/styles.scss',
      'addon/styles/products/product.scss',
    ],
    ['addon/products/styles.scss', 'addon/styles/products.scss'],
  ]);
});
