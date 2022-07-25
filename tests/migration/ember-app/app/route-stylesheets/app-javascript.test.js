import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-app/app/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | route-stylesheets > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteStylesheets(projectRoot), [
    ['app/application/styles.css', 'app/styles/application.css'],
    ['app/form/styles.css', 'app/styles/form.css'],
    ['app/index/styles.css', 'app/styles/index.css'],
    ['app/product-details/styles.css', 'app/styles/product-details.css'],
    ['app/products/product/styles.scss', 'app/styles/products/product.scss'],
    ['app/products/styles.scss', 'app/styles/products.scss'],
  ]);
});
