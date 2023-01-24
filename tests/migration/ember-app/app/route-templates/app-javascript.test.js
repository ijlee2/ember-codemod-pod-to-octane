import { migrationStrategyForRouteTemplates } from '../../../../../src/migration/ember-app/app/route-templates.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-templates > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/template.hbs', 'app/templates/application.hbs'],
    ['app/form/template.hbs', 'app/templates/form.hbs'],
    ['app/index/template.hbs', 'app/templates/index.hbs'],
    ['app/product-details/template.hbs', 'app/templates/product-details.hbs'],
    ['app/products/product/template.hbs', 'app/templates/products/product.hbs'],
    ['app/products/template.hbs', 'app/templates/products.hbs'],
  ]);
});
