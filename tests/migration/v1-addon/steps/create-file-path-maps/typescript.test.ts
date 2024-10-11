import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import { inputProject } from '../../../../fixtures/v1-addon/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/components/navigation-menu/component.ts',
        'addon/components/navigation-menu.ts',
      ],
      [
        'addon/components/navigation-menu/styles.css',
        'addon/components/navigation-menu.css',
      ],
      [
        'addon/components/navigation-menu/template.hbs',
        'addon/components/navigation-menu.hbs',
      ],
      ['addon/components/ui/page/component.ts', 'addon/components/ui/page.ts'],
      ['addon/components/ui/page/styles.css', 'addon/components/ui/page.css'],
      ['addon/components/ui/page/template.hbs', 'addon/components/ui/page.hbs'],
      ['addon/experiments/service.ts', 'addon/services/experiments.ts'],
      ['addon/products/controller.ts', 'addon/controllers/products.ts'],
      [
        'addon/products/product/controller.ts',
        'addon/controllers/products/product.ts',
      ],
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
    filePathMaps.app,
    new Map([
      [
        'app/components/navigation-menu/component.js',
        'app/components/navigation-menu.js',
      ],
      [
        'app/components/navigation-menu/template.js',
        'app/components/navigation-menu.js',
      ],
      ['app/components/ui/page/component.js', 'app/components/ui/page.js'],
      ['app/components/ui/page/template.js', 'app/components/ui/page.js'],
      ['app/experiments/service.js', 'app/services/experiments.js'],
      ['app/products/controller.js', 'app/controllers/products.js'],
      [
        'app/products/product/controller.js',
        'app/controllers/products/product.js',
      ],
      ['app/products/product/route.js', 'app/routes/products/product.js'],
      ['app/products/product/template.js', 'app/templates/products/product.js'],
      ['app/products/route.js', 'app/routes/products.js'],
      ['app/products/template.js', 'app/templates/products.js'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/navigation-menu/component-test.ts',
        'tests/integration/components/navigation-menu-test.ts',
      ],
      [
        'tests/integration/components/ui/page/component-test.ts',
        'tests/integration/components/ui/page-test.ts',
      ],
      [
        'tests/unit/experiments/service-test.ts',
        'tests/unit/services/experiments-test.ts',
      ],
      [
        'tests/unit/products/controller-test.ts',
        'tests/unit/controllers/products-test.ts',
      ],
      [
        'tests/unit/products/product/controller-test.ts',
        'tests/unit/controllers/products/product-test.ts',
      ],
      [
        'tests/unit/products/product/route-test.ts',
        'tests/unit/routes/products/product-test.ts',
      ],
      [
        'tests/unit/products/route-test.ts',
        'tests/unit/routes/products-test.ts',
      ],
    ]),
  );
});
