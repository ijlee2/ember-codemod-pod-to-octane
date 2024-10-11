import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/app/steps/index.js';
import { inputProject } from '../../../../fixtures/app/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/app/sass.js';

test('migration | app | steps | create-file-path-maps > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([
      ['app/application/adapter.js', 'app/adapters/application.js'],
      ['app/application/route.js', 'app/routes/application.js'],
      ['app/application/serializer.js', 'app/serializers/application.js'],
      ['app/application/styles.scss', 'app/styles/application.scss'],
      ['app/application/template.hbs', 'app/templates/application.hbs'],
      [
        'app/components/navigation-menu/styles.scss',
        'app/components/navigation-menu.scss',
      ],
      [
        'app/components/navigation-menu/template.hbs',
        'app/components/navigation-menu.hbs',
      ],
      [
        'app/components/product/card/styles.scss',
        'app/components/product/card.scss',
      ],
      [
        'app/components/product/card/template.hbs',
        'app/components/product/card.hbs',
      ],
      [
        'app/components/product/details/component.js',
        'app/components/product/details.js',
      ],
      [
        'app/components/product/details/styles.scss',
        'app/components/product/details.scss',
      ],
      [
        'app/components/product/details/template.hbs',
        'app/components/product/details.hbs',
      ],
      [
        'app/components/product/image/component.js',
        'app/components/product/image.js',
      ],
      [
        'app/components/product/image/styles.scss',
        'app/components/product/image.scss',
      ],
      [
        'app/components/product/image/template.hbs',
        'app/components/product/image.hbs',
      ],
      [
        'app/components/ui/form/checkbox/component.js',
        'app/components/ui/form/checkbox.js',
      ],
      [
        'app/components/ui/form/checkbox/styles.scss',
        'app/components/ui/form/checkbox.scss',
      ],
      [
        'app/components/ui/form/checkbox/template.hbs',
        'app/components/ui/form/checkbox.hbs',
      ],
      ['app/components/ui/form/component.js', 'app/components/ui/form.js'],
      [
        'app/components/ui/form/field/styles.scss',
        'app/components/ui/form/field.scss',
      ],
      [
        'app/components/ui/form/field/template.hbs',
        'app/components/ui/form/field.hbs',
      ],
      [
        'app/components/ui/form/information/styles.scss',
        'app/components/ui/form/information.scss',
      ],
      [
        'app/components/ui/form/information/template.hbs',
        'app/components/ui/form/information.hbs',
      ],
      [
        'app/components/ui/form/input/component.js',
        'app/components/ui/form/input.js',
      ],
      [
        'app/components/ui/form/input/styles.scss',
        'app/components/ui/form/input.scss',
      ],
      [
        'app/components/ui/form/input/template.hbs',
        'app/components/ui/form/input.hbs',
      ],
      [
        'app/components/ui/form/number/component.js',
        'app/components/ui/form/number.js',
      ],
      [
        'app/components/ui/form/number/styles.scss',
        'app/components/ui/form/number.scss',
      ],
      [
        'app/components/ui/form/number/template.hbs',
        'app/components/ui/form/number.hbs',
      ],
      [
        'app/components/ui/form/select/component.js',
        'app/components/ui/form/select.js',
      ],
      [
        'app/components/ui/form/select/styles.scss',
        'app/components/ui/form/select.scss',
      ],
      [
        'app/components/ui/form/select/template.hbs',
        'app/components/ui/form/select.hbs',
      ],
      ['app/components/ui/form/styles.scss', 'app/components/ui/form.scss'],
      ['app/components/ui/form/template.hbs', 'app/components/ui/form.hbs'],
      [
        'app/components/ui/form/textarea/component.js',
        'app/components/ui/form/textarea.js',
      ],
      [
        'app/components/ui/form/textarea/styles.scss',
        'app/components/ui/form/textarea.scss',
      ],
      [
        'app/components/ui/form/textarea/template.hbs',
        'app/components/ui/form/textarea.hbs',
      ],
      ['app/components/ui/page/styles.scss', 'app/components/ui/page.scss'],
      ['app/components/ui/page/template.hbs', 'app/components/ui/page.hbs'],
      ['app/config/service.js', 'app/services/config.js'],
      ['app/experiments/service.js', 'app/services/experiments.js'],
      ['app/form/controller.js', 'app/controllers/form.js'],
      ['app/form/route.js', 'app/routes/form.js'],
      ['app/form/styles.scss', 'app/styles/form.scss'],
      ['app/form/template.hbs', 'app/templates/form.hbs'],
      ['app/index/route.js', 'app/routes/index.js'],
      ['app/index/styles.scss', 'app/styles/index.scss'],
      ['app/index/template.hbs', 'app/templates/index.hbs'],
      ['app/product-details/route.js', 'app/routes/product-details.js'],
      ['app/product-details/styles.scss', 'app/styles/product-details.scss'],
      ['app/product-details/template.hbs', 'app/templates/product-details.hbs'],
      ['app/product/model.js', 'app/models/product.js'],
      ['app/products/controller.js', 'app/controllers/products.js'],
      ['app/products/product/route.js', 'app/routes/products/product.js'],
      ['app/products/product/styles.scss', 'app/styles/products/product.scss'],
      [
        'app/products/product/template.hbs',
        'app/templates/products/product.hbs',
      ],
      ['app/products/route.js', 'app/routes/products.js'],
      ['app/products/styles.scss', 'app/styles/products.scss'],
      ['app/products/template.hbs', 'app/templates/products.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/navigation-menu/component-test.js',
        'tests/integration/components/navigation-menu-test.js',
      ],
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
        'tests/integration/components/ui/form/checkbox/component-test.js',
        'tests/integration/components/ui/form/checkbox-test.js',
      ],
      [
        'tests/integration/components/ui/form/component-test.js',
        'tests/integration/components/ui/form-test.js',
      ],
      [
        'tests/integration/components/ui/form/field/component-test.js',
        'tests/integration/components/ui/form/field-test.js',
      ],
      [
        'tests/integration/components/ui/form/information/component-test.js',
        'tests/integration/components/ui/form/information-test.js',
      ],
      [
        'tests/integration/components/ui/form/input/component-test.js',
        'tests/integration/components/ui/form/input-test.js',
      ],
      [
        'tests/integration/components/ui/form/number/component-test.js',
        'tests/integration/components/ui/form/number-test.js',
      ],
      [
        'tests/integration/components/ui/form/select/component-test.js',
        'tests/integration/components/ui/form/select-test.js',
      ],
      [
        'tests/integration/components/ui/form/textarea/component-test.js',
        'tests/integration/components/ui/form/textarea-test.js',
      ],
      [
        'tests/integration/components/ui/page/component-test.js',
        'tests/integration/components/ui/page-test.js',
      ],
      [
        'tests/unit/application/route-test.js',
        'tests/unit/routes/application-test.js',
      ],
      [
        'tests/unit/config/service-test.js',
        'tests/unit/services/config-test.js',
      ],
      [
        'tests/unit/controllers/form/controller-test.js',
        'tests/unit/controllers/form-test.js',
      ],
      [
        'tests/unit/controllers/products/controller-test.js',
        'tests/unit/controllers/products-test.js',
      ],
      [
        'tests/unit/experiments/service-test.js',
        'tests/unit/services/experiments-test.js',
      ],
      [
        'tests/unit/form/controller-test.js',
        'tests/unit/controllers/form-test.js',
      ],
      ['tests/unit/form/route-test.js', 'tests/unit/routes/form-test.js'],
      ['tests/unit/index/route-test.js', 'tests/unit/routes/index-test.js'],
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
        'tests/unit/routes/application/route-test.js',
        'tests/unit/routes/application-test.js',
      ],
      [
        'tests/unit/routes/form/route-test.js',
        'tests/unit/routes/form-test.js',
      ],
      [
        'tests/unit/routes/index/route-test.js',
        'tests/unit/routes/index-test.js',
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
