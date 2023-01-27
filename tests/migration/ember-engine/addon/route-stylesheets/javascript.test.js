import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-engine/addon/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/javascript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | route-stylesheets > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/styles.css', 'addon/styles/product-details.css'],
    ['addon/products/product/styles.css', 'addon/styles/products/product.css'],
    ['addon/products/styles.css', 'addon/styles/products.css'],
  ]);
});
