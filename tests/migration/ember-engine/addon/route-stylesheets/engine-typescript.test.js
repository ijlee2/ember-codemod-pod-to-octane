import { migrationStrategyForRouteStylesheets } from '../../../../../src/migration/ember-engine/addon/route-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | route-stylesheets > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/product-details/styles.css', 'addon/styles/product-details.css'],
    [
      'addon/products/product/styles.scss',
      'addon/styles/products/product.scss',
    ],
    ['addon/products/styles.scss', 'addon/styles/products.scss'],
  ]);
});
