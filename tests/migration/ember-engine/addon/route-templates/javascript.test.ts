import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteTemplates } from '../../../../../src/migration/ember-engine/addon/route-templates.js';
import { inputProject } from '../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | addon | route-templates > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/product-details/template.hbs',
      'addon/templates/product-details.hbs',
    ],
    [
      'addon/products/product/template.hbs',
      'addon/templates/products/product.hbs',
    ],
    ['addon/products/template.hbs', 'addon/templates/products.hbs'],
  ]);
});
