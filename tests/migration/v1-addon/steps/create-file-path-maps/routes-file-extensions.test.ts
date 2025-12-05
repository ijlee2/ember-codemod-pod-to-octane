import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import { normalizeFilePathMap } from '../../../../helpers/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > routes (file extensions)', function () {
  const inputProject = {
    addon: {
      products: {
        product: {
          'controller.js': '',
          'route.js': '',
          'template.hbs': '',
        },
        'controller.js': '',
        'route.js': '',
        'template.hbs': '',
      },
    },
    tests: {
      unit: {
        products: {
          product: {
            'controller-test.js': '',
            'route-test.js': '',
          },
          'controller-test.js': '',
          'route-test.js': '',
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    normalizeFilePathMap(
      new Map([
        ['addon/products/controller.js', 'addon/controllers/products.js'],
        ['addon/products/route.js', 'addon/routes/products.js'],
        ['addon/products/template.hbs', 'addon/templates/products.hbs'],
        [
          'addon/products/product/controller.js',
          'addon/controllers/products/product.js',
        ],
        ['addon/products/product/route.js', 'addon/routes/products/product.js'],
        [
          'addon/products/product/template.hbs',
          'addon/templates/products/product.hbs',
        ],
      ]),
    ),
  );

  assert.deepStrictEqual(filePathMaps.app, normalizeFilePathMap(new Map()));

  assert.deepStrictEqual(
    filePathMaps.tests,
    normalizeFilePathMap(
      new Map([
        [
          'tests/unit/products/controller-test.js',
          'tests/unit/controllers/products-test.js',
        ],
        [
          'tests/unit/products/route-test.js',
          'tests/unit/routes/products-test.js',
        ],
        [
          'tests/unit/products/product/controller-test.js',
          'tests/unit/controllers/products/product-test.js',
        ],
        [
          'tests/unit/products/product/route-test.js',
          'tests/unit/routes/products/product-test.js',
        ],
      ]),
    ),
  );
});
