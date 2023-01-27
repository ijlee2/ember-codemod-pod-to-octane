import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-app/app/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-stylesheets > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/styles.css', 'app/styles/application.css'],
    ['app/form/styles.css', 'app/styles/form.css'],
    ['app/index/styles.css', 'app/styles/index.css'],
    ['app/product-details/styles.css', 'app/styles/product-details.css'],
    ['app/products/product/styles.scss', 'app/styles/products/product.scss'],
    ['app/products/styles.scss', 'app/styles/products.scss'],
  ]);
});
