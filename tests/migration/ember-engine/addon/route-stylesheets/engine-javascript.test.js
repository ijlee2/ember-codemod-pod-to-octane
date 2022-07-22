import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-engine/addon/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | addon | route-stylesheets > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteStylesheets(projectRoot), [
    ['addon/product-details/styles.css', 'addon/styles/product-details.css'],
    ['addon/products/product/styles.css', 'addon/styles/products/product.css'],
    ['addon/products/styles.css', 'addon/styles/products.css'],
  ]);
});
