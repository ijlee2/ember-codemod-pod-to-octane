import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/app/steps/index.js';
import { inputProject } from '../../../../fixtures/app/edge-case-components/index.js';
import { normalizeFilePathMap } from '../../../../helpers/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/app/edge-case-components.js';

test('migration | app | steps | create-file-path-maps > edge-case-components', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.app,
    normalizeFilePathMap(
      new Map([
        ['app/application/adapter.ts', 'app/adapters/application.ts'],
        ['app/application/route.ts', 'app/routes/application.ts'],
        ['app/application/serializer.ts', 'app/serializers/application.ts'],
        ['app/application/styles.css', 'app/styles/application.css'],
        ['app/application/template.hbs', 'app/templates/application.hbs'],
        ['app/config/service.ts', 'app/services/config.ts'],
        ['app/experiments/service.ts', 'app/services/experiments.ts'],
        ['app/form/controller.ts', 'app/controllers/form.ts'],
        ['app/form/route.ts', 'app/routes/form.ts'],
        ['app/form/styles.css', 'app/styles/form.css'],
        ['app/form/template.hbs', 'app/templates/form.hbs'],
        ['app/index/route.ts', 'app/routes/index.ts'],
        ['app/index/styles.css', 'app/styles/index.css'],
        ['app/index/template.hbs', 'app/templates/index.hbs'],
        [
          'app/navigation-menu/component.d.ts',
          'app/components/navigation-menu.d.ts',
        ],
        [
          'app/navigation-menu/styles.css',
          'app/components/navigation-menu.css',
        ],
        [
          'app/navigation-menu/template.hbs',
          'app/components/navigation-menu.hbs',
        ],
        ['app/product-details/route.ts', 'app/routes/product-details.ts'],
        ['app/product-details/styles.css', 'app/styles/product-details.css'],
        [
          'app/product-details/template.hbs',
          'app/templates/product-details.hbs',
        ],
        ['app/product/card/component.d.ts', 'app/components/product/card.d.ts'],
        ['app/product/card/styles.css', 'app/components/product/card.css'],
        ['app/product/card/template.hbs', 'app/components/product/card.hbs'],
        [
          'app/product/details/component.ts',
          'app/components/product/details.ts',
        ],
        [
          'app/product/details/styles.css',
          'app/components/product/details.css',
        ],
        [
          'app/product/details/template.hbs',
          'app/components/product/details.hbs',
        ],
        ['app/product/image/component.ts', 'app/components/product/image.ts'],
        ['app/product/image/styles.css', 'app/components/product/image.css'],
        ['app/product/image/template.hbs', 'app/components/product/image.hbs'],
        ['app/product/model.ts', 'app/models/product.ts'],
        ['app/products/controller.ts', 'app/controllers/products.ts'],
        ['app/products/product/route.ts', 'app/routes/products/product.ts'],
        ['app/products/product/styles.css', 'app/styles/products/product.css'],
        [
          'app/products/product/template.hbs',
          'app/templates/products/product.hbs',
        ],
        ['app/products/route.ts', 'app/routes/products.ts'],
        ['app/products/styles.css', 'app/styles/products.css'],
        ['app/products/template.hbs', 'app/templates/products.hbs'],
        [
          'app/ui/form/checkbox/component.ts',
          'app/components/ui/form/checkbox.ts',
        ],
        [
          'app/ui/form/checkbox/styles.css',
          'app/components/ui/form/checkbox.css',
        ],
        [
          'app/ui/form/checkbox/template.hbs',
          'app/components/ui/form/checkbox.hbs',
        ],
        ['app/ui/form/component.ts', 'app/components/ui/form.ts'],
        [
          'app/ui/form/field/component.d.ts',
          'app/components/ui/form/field.d.ts',
        ],
        ['app/ui/form/field/styles.css', 'app/components/ui/form/field.css'],
        ['app/ui/form/field/template.hbs', 'app/components/ui/form/field.hbs'],
        [
          'app/ui/form/information/component.d.ts',
          'app/components/ui/form/information.d.ts',
        ],
        [
          'app/ui/form/information/styles.css',
          'app/components/ui/form/information.css',
        ],
        [
          'app/ui/form/information/template.hbs',
          'app/components/ui/form/information.hbs',
        ],
        ['app/ui/form/input/component.ts', 'app/components/ui/form/input.ts'],
        ['app/ui/form/input/styles.css', 'app/components/ui/form/input.css'],
        ['app/ui/form/input/template.hbs', 'app/components/ui/form/input.hbs'],
        ['app/ui/form/number/component.ts', 'app/components/ui/form/number.ts'],
        ['app/ui/form/number/styles.css', 'app/components/ui/form/number.css'],
        [
          'app/ui/form/number/template.hbs',
          'app/components/ui/form/number.hbs',
        ],
        ['app/ui/form/select/component.ts', 'app/components/ui/form/select.ts'],
        ['app/ui/form/select/styles.css', 'app/components/ui/form/select.css'],
        [
          'app/ui/form/select/template.hbs',
          'app/components/ui/form/select.hbs',
        ],
        ['app/ui/form/styles.css', 'app/components/ui/form.css'],
        ['app/ui/form/template.hbs', 'app/components/ui/form.hbs'],
        [
          'app/ui/form/textarea/component.ts',
          'app/components/ui/form/textarea.ts',
        ],
        [
          'app/ui/form/textarea/styles.css',
          'app/components/ui/form/textarea.css',
        ],
        [
          'app/ui/form/textarea/template.hbs',
          'app/components/ui/form/textarea.hbs',
        ],
        ['app/ui/page/component.d.ts', 'app/components/ui/page.d.ts'],
        ['app/ui/page/styles.css', 'app/components/ui/page.css'],
        ['app/ui/page/template.hbs', 'app/components/ui/page.hbs'],
        [
          'app/unknowns/example-1/component.js',
          'app/components/unknowns/example-1.js',
        ],
        [
          'app/unknowns/example-2/styles.css',
          'app/styles/unknowns/example-2.css',
        ],
        [
          'app/unknowns/example-3/template.hbs',
          'app/templates/unknowns/example-3.hbs',
        ],
      ]),
    ),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    normalizeFilePathMap(
      new Map([
        [
          'tests/integration/components/navigation-menu/component-test.ts',
          'tests/integration/components/navigation-menu-test.ts',
        ],
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
          'tests/integration/components/ui/form/checkbox/component-test.ts',
          'tests/integration/components/ui/form/checkbox-test.ts',
        ],
        [
          'tests/integration/components/ui/form/component-test.ts',
          'tests/integration/components/ui/form-test.ts',
        ],
        [
          'tests/integration/components/ui/form/field/component-test.ts',
          'tests/integration/components/ui/form/field-test.ts',
        ],
        [
          'tests/integration/components/ui/form/information/component-test.ts',
          'tests/integration/components/ui/form/information-test.ts',
        ],
        [
          'tests/integration/components/ui/form/input/component-test.ts',
          'tests/integration/components/ui/form/input-test.ts',
        ],
        [
          'tests/integration/components/ui/form/number/component-test.ts',
          'tests/integration/components/ui/form/number-test.ts',
        ],
        [
          'tests/integration/components/ui/form/select/component-test.ts',
          'tests/integration/components/ui/form/select-test.ts',
        ],
        [
          'tests/integration/components/ui/form/textarea/component-test.ts',
          'tests/integration/components/ui/form/textarea-test.ts',
        ],
        [
          'tests/integration/components/ui/page/component-test.ts',
          'tests/integration/components/ui/page-test.ts',
        ],
        [
          'tests/unit/application/route-test.ts',
          'tests/unit/routes/application-test.ts',
        ],
        [
          'tests/unit/config/service-test.ts',
          'tests/unit/services/config-test.ts',
        ],
        [
          'tests/unit/controllers/form/controller-test.ts',
          'tests/unit/controllers/form-test.ts',
        ],
        [
          'tests/unit/controllers/products/controller-test.ts',
          'tests/unit/controllers/products-test.ts',
        ],
        [
          'tests/unit/experiments/service-test.ts',
          'tests/unit/services/experiments-test.ts',
        ],
        [
          'tests/unit/form/controller-test.ts',
          'tests/unit/controllers/form-test.ts',
        ],
        ['tests/unit/form/route-test.ts', 'tests/unit/routes/form-test.ts'],
        ['tests/unit/index/route-test.ts', 'tests/unit/routes/index-test.ts'],
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
          'tests/unit/routes/application/route-test.ts',
          'tests/unit/routes/application-test.ts',
        ],
        [
          'tests/unit/routes/form/route-test.ts',
          'tests/unit/routes/form-test.ts',
        ],
        [
          'tests/unit/routes/index/route-test.ts',
          'tests/unit/routes/index-test.ts',
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
    ),
  );
});
