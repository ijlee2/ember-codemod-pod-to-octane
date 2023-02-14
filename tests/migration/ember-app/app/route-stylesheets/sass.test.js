import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-app/app/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-app/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/sass.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-stylesheets > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/styles.scss', 'app/styles/application.scss'],
    ['app/form/styles.scss', 'app/styles/form.scss'],
    ['app/index/styles.scss', 'app/styles/index.scss'],
    ['app/product-details/styles.scss', 'app/styles/product-details.scss'],
    ['app/products/product/styles.scss', 'app/styles/products/product.scss'],
    ['app/products/styles.scss', 'app/styles/products.scss'],
  ]);
});
