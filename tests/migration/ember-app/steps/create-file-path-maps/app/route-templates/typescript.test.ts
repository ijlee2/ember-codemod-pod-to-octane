import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteTemplates } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/route-templates.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | route-templates > typescript', function () {
  loadFixture(inputProject, codemodOptions);

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
