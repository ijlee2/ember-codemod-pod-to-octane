import { migrationStrategyForRouteTemplates } from '../../../../../src/migration/ember-app/app/route-templates.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-templates > podPath', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/application/template.hbs', 'app/templates/application.hbs'],
    ['app/pods/form/template.hbs', 'app/templates/form.hbs'],
    ['app/pods/index/template.hbs', 'app/templates/index.hbs'],
    [
      'app/pods/product-details/template.hbs',
      'app/templates/product-details.hbs',
    ],
    [
      'app/pods/products/product/template.hbs',
      'app/templates/products/product.hbs',
    ],
    ['app/pods/products/template.hbs', 'app/templates/products.hbs'],
  ]);
});
