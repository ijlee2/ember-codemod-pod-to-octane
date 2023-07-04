import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/ember-engine/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | steps | create-file-path-maps > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/components/product/card/component.d.ts',
        'addon/components/product/card.d.ts',
      ],
      [
        'addon/components/product/card/styles.css',
        'addon/components/product/card.css',
      ],
      [
        'addon/components/product/card/template.hbs',
        'addon/components/product/card.hbs',
      ],
      [
        'addon/components/product/details/component.ts',
        'addon/components/product/details.ts',
      ],
      [
        'addon/components/product/details/styles.css',
        'addon/components/product/details.css',
      ],
      [
        'addon/components/product/details/template.hbs',
        'addon/components/product/details.hbs',
      ],
      [
        'addon/components/product/image/component.ts',
        'addon/components/product/image.ts',
      ],
      [
        'addon/components/product/image/styles.css',
        'addon/components/product/image.css',
      ],
      [
        'addon/components/product/image/template.hbs',
        'addon/components/product/image.hbs',
      ],
      ['addon/product-details/route.ts', 'addon/routes/product-details.ts'],
      ['addon/product-details/styles.css', 'addon/styles/product-details.css'],
      [
        'addon/product-details/template.hbs',
        'addon/templates/product-details.hbs',
      ],
      ['addon/products/controller.ts', 'addon/controllers/products.ts'],
      ['addon/products/product/route.ts', 'addon/routes/products/product.ts'],
      [
        'addon/products/product/styles.css',
        'addon/styles/products/product.css',
      ],
      [
        'addon/products/product/template.hbs',
        'addon/templates/products/product.hbs',
      ],
      ['addon/products/route.ts', 'addon/routes/products.ts'],
      ['addon/products/styles.css', 'addon/styles/products.css'],
      ['addon/products/template.hbs', 'addon/templates/products.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/product/card/component-test.ts',
        'tests/integration/components/product/card-test.ts',
      ],
      [
        'tests/integration/components/product/details/component-test.ts',
        'tests/integration/components/product/details-test.ts',
      ],
      [
        'tests/integration/components/product/image/component-test.ts',
        'tests/integration/components/product/image-test.ts',
      ],
      [
        'tests/unit/controllers/products/controller-test.ts',
        'tests/unit/controllers/products-test.ts',
      ],
      [
        'tests/unit/product-details/route-test.ts',
        'tests/unit/routes/product-details-test.ts',
      ],
      [
        'tests/unit/products/product/route-test.ts',
        'tests/unit/routes/products/product-test.ts',
      ],
      [
        'tests/unit/products/route-test.ts',
        'tests/unit/routes/products-test.ts',
      ],
      [
        'tests/unit/routes/product-details/route-test.ts',
        'tests/unit/routes/product-details-test.ts',
      ],
      [
        'tests/unit/products/controller-test.ts',
        'tests/unit/controllers/products-test.ts',
      ],
      [
        'tests/unit/routes/products/product/route-test.ts',
        'tests/unit/routes/products/product-test.ts',
      ],
      [
        'tests/unit/routes/products/route-test.ts',
        'tests/unit/routes/products-test.ts',
      ],
    ]),
  );
});
