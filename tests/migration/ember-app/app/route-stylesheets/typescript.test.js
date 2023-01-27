import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-app/app/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-stylesheets > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/styles.css', 'app/styles/application.css'],
    ['app/form/styles.css', 'app/styles/form.css'],
    ['app/index/styles.css', 'app/styles/index.css'],
    ['app/product-details/styles.css', 'app/styles/product-details.css'],
    ['app/products/product/styles.css', 'app/styles/products/product.css'],
    ['app/products/styles.css', 'app/styles/products.css'],
  ]);
});
