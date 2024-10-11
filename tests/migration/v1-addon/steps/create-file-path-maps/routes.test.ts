import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > routes', function () {
  const inputProject = {
    addon: {
      products: {
        product: {
          'controller.ts': '',
          'route.ts': '',
          'template.hbs': '',
        },
        'controller.ts': '',
        'route.ts': '',
        'template.hbs': '',
      },
    },
    app: {
      products: {
        product: {
          'controller.js': '',
          'route.js': '',
          'template.js': '',
        },
        'controller.js': '',
        'route.js': '',
        'template.js': '',
      },
    },
    tests: {
      unit: {
        products: {
          product: {
            'controller-test.ts': '',
            'route-test.ts': '',
          },
          'controller-test.ts': '',
          'route-test.ts': '',
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      ['addon/products/controller.ts', 'addon/controllers/products.ts'],
      ['addon/products/route.ts', 'addon/routes/products.ts'],
      ['addon/products/template.hbs', 'addon/templates/products.hbs'],
      [
        'addon/products/product/controller.ts',
        'addon/controllers/products/product.ts',
      ],
      ['addon/products/product/route.ts', 'addon/routes/products/product.ts'],
      [
        'addon/products/product/template.hbs',
        'addon/templates/products/product.hbs',
      ],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([
      ['app/products/controller.js', 'app/controllers/products.js'],
      ['app/products/route.js', 'app/routes/products.js'],
      ['app/products/template.js', 'app/templates/products.js'],
      [
        'app/products/product/controller.js',
        'app/controllers/products/product.js',
      ],
      ['app/products/product/route.js', 'app/routes/products/product.js'],
      ['app/products/product/template.js', 'app/templates/products/product.js'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/unit/products/controller-test.ts',
        'tests/unit/controllers/products-test.ts',
      ],
      [
        'tests/unit/products/route-test.ts',
        'tests/unit/routes/products-test.ts',
      ],
      [
        'tests/unit/products/product/controller-test.ts',
        'tests/unit/controllers/products/product-test.ts',
      ],
      [
        'tests/unit/products/product/route-test.ts',
        'tests/unit/routes/products/product-test.ts',
      ],
    ]),
  );
});
