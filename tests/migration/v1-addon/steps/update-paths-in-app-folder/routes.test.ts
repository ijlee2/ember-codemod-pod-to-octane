import { moveFiles } from '@codemod-utils/files';
import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { updatePathsInAppFolder } from '../../../../../src/migration/v1-addon/steps/index.js';
import { normalizeFilePathMap } from '../../../../helpers/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | update-paths-in-app-folder > routes', function () {
  const inputProject = {
    app: {
      products: {
        product: {
          'controller.js': `export { default } from 'my-v1-addon/products/product/controller';`,
          'route.js': `export { default } from 'my-v1-addon/products/product/route';`,
          'template.js': `export { default } from 'my-v1-addon/products/product/template';`,
        },
        'controller.js': `export { default } from 'my-v1-addon/products/controller';`,
        'route.js': `export { default } from 'my-v1-addon/products/route';`,
        'template.js': `export { default } from 'my-v1-addon/products/template';`,
      },
    },
  };

  const outputProject = {
    app: {
      controllers: {
        products: {
          'product.js': `export { default } from 'my-v1-addon/controllers/products/product';`,
        },
        'products.js': `export { default } from 'my-v1-addon/controllers/products';`,
      },
      routes: {
        products: {
          'product.js': `export { default } from 'my-v1-addon/routes/products/product';`,
        },
        'products.js': `export { default } from 'my-v1-addon/routes/products';`,
      },
      templates: {
        products: {
          'product.js': `export { default } from 'my-v1-addon/templates/products/product';`,
        },
        'products.js': `export { default } from 'my-v1-addon/templates/products';`,
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMap = normalizeFilePathMap(
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

  moveFiles(filePathMap, options);

  updatePathsInAppFolder(filePathMap, options);

  assertFixture(outputProject, codemodOptions);
});
