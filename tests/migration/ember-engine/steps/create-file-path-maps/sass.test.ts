import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/ember-engine/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-engine/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/sass.js';

test('migration | ember-engine | steps | create-file-path-maps > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/components/product/card/styles.scss',
        'addon/components/product/card.scss',
      ],
      [
        'addon/components/product/card/template.hbs',
        'addon/components/product/card.hbs',
      ],
      [
        'addon/components/product/details/component.js',
        'addon/components/product/details.js',
      ],
      [
        'addon/components/product/details/styles.scss',
        'addon/components/product/details.scss',
      ],
      [
        'addon/components/product/details/template.hbs',
        'addon/components/product/details.hbs',
      ],
      [
        'addon/components/product/image/component.js',
        'addon/components/product/image.js',
      ],
      [
        'addon/components/product/image/styles.scss',
        'addon/components/product/image.scss',
      ],
      [
        'addon/components/product/image/template.hbs',
        'addon/components/product/image.hbs',
      ],
      ['addon/product-details/route.js', 'addon/routes/product-details.js'],
      [
        'addon/product-details/styles.scss',
        'addon/styles/product-details.scss',
      ],
      [
        'addon/product-details/template.hbs',
        'addon/templates/product-details.hbs',
      ],
      ['addon/products/controller.js', 'addon/controllers/products.js'],
      ['addon/products/product/route.js', 'addon/routes/products/product.js'],
      [
        'addon/products/product/styles.scss',
        'addon/styles/products/product.scss',
      ],
      [
        'addon/products/product/template.hbs',
        'addon/templates/products/product.hbs',
      ],
      ['addon/products/route.js', 'addon/routes/products.js'],
      ['addon/products/styles.scss', 'addon/styles/products.scss'],
      ['addon/products/template.hbs', 'addon/templates/products.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/product/card/component-test.js',
        'tests/integration/components/product/card-test.js',
      ],
      [
        'tests/integration/components/product/details/component-test.js',
        'tests/integration/components/product/details-test.js',
      ],
      [
        'tests/integration/components/product/image/component-test.js',
        'tests/integration/components/product/image-test.js',
      ],
      [
        'tests/unit/controllers/products/controller-test.js',
        'tests/unit/controllers/products-test.js',
      ],
      [
        'tests/unit/product-details/route-test.js',
        'tests/unit/routes/product-details-test.js',
      ],
      [
        'tests/unit/products/product/route-test.js',
        'tests/unit/routes/products/product-test.js',
      ],
      [
        'tests/unit/products/route-test.js',
        'tests/unit/routes/products-test.js',
      ],
      [
        'tests/unit/routes/product-details/route-test.js',
        'tests/unit/routes/product-details-test.js',
      ],
      [
        'tests/unit/products/controller-test.js',
        'tests/unit/controllers/products-test.js',
      ],
      [
        'tests/unit/routes/products/product/route-test.js',
        'tests/unit/routes/products/product-test.js',
      ],
      [
        'tests/unit/routes/products/route-test.js',
        'tests/unit/routes/products-test.js',
      ],
    ]),
  );
});
