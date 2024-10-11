import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/app/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | app | steps | create-file-path-maps > pod-path', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([
      ['app/pods/application/adapter.js', 'app/adapters/application.js'],
      ['app/pods/application/route.js', 'app/routes/application.js'],
      ['app/pods/application/serializer.js', 'app/serializers/application.js'],
      ['app/pods/application/styles.css', 'app/styles/application.css'],
      ['app/pods/application/template.hbs', 'app/templates/application.hbs'],
      [
        'app/pods/components/navigation-menu/styles.css',
        'app/components/navigation-menu.css',
      ],
      [
        'app/pods/components/navigation-menu/template.hbs',
        'app/components/navigation-menu.hbs',
      ],
      [
        'app/pods/components/product/card/styles.css',
        'app/components/product/card.css',
      ],
      [
        'app/pods/components/product/card/template.hbs',
        'app/components/product/card.hbs',
      ],
      [
        'app/pods/components/product/details/component.js',
        'app/components/product/details.js',
      ],
      [
        'app/pods/components/product/details/styles.css',
        'app/components/product/details.css',
      ],
      [
        'app/pods/components/product/details/template.hbs',
        'app/components/product/details.hbs',
      ],
      [
        'app/pods/components/product/image/component.js',
        'app/components/product/image.js',
      ],
      [
        'app/pods/components/product/image/styles.css',
        'app/components/product/image.css',
      ],
      [
        'app/pods/components/product/image/template.hbs',
        'app/components/product/image.hbs',
      ],
      [
        'app/pods/components/ui/form/checkbox/component.js',
        'app/components/ui/form/checkbox.js',
      ],
      [
        'app/pods/components/ui/form/checkbox/styles.css',
        'app/components/ui/form/checkbox.css',
      ],
      [
        'app/pods/components/ui/form/checkbox/template.hbs',
        'app/components/ui/form/checkbox.hbs',
      ],
      ['app/pods/components/ui/form/component.js', 'app/components/ui/form.js'],
      [
        'app/pods/components/ui/form/field/styles.css',
        'app/components/ui/form/field.css',
      ],
      [
        'app/pods/components/ui/form/field/template.hbs',
        'app/components/ui/form/field.hbs',
      ],
      [
        'app/pods/components/ui/form/information/styles.css',
        'app/components/ui/form/information.css',
      ],
      [
        'app/pods/components/ui/form/information/template.hbs',
        'app/components/ui/form/information.hbs',
      ],
      [
        'app/pods/components/ui/form/input/component.js',
        'app/components/ui/form/input.js',
      ],
      [
        'app/pods/components/ui/form/input/styles.css',
        'app/components/ui/form/input.css',
      ],
      [
        'app/pods/components/ui/form/input/template.hbs',
        'app/components/ui/form/input.hbs',
      ],
      [
        'app/pods/components/ui/form/number/component.js',
        'app/components/ui/form/number.js',
      ],
      [
        'app/pods/components/ui/form/number/styles.css',
        'app/components/ui/form/number.css',
      ],
      [
        'app/pods/components/ui/form/number/template.hbs',
        'app/components/ui/form/number.hbs',
      ],
      [
        'app/pods/components/ui/form/select/component.js',
        'app/components/ui/form/select.js',
      ],
      [
        'app/pods/components/ui/form/select/styles.css',
        'app/components/ui/form/select.css',
      ],
      [
        'app/pods/components/ui/form/select/template.hbs',
        'app/components/ui/form/select.hbs',
      ],
      ['app/pods/components/ui/form/styles.css', 'app/components/ui/form.css'],
      [
        'app/pods/components/ui/form/template.hbs',
        'app/components/ui/form.hbs',
      ],
      [
        'app/pods/components/ui/form/textarea/component.js',
        'app/components/ui/form/textarea.js',
      ],
      [
        'app/pods/components/ui/form/textarea/styles.css',
        'app/components/ui/form/textarea.css',
      ],
      [
        'app/pods/components/ui/form/textarea/template.hbs',
        'app/components/ui/form/textarea.hbs',
      ],
      ['app/pods/components/ui/page/styles.css', 'app/components/ui/page.css'],
      [
        'app/pods/components/ui/page/template.hbs',
        'app/components/ui/page.hbs',
      ],
      ['app/pods/config/service.js', 'app/services/config.js'],
      ['app/pods/experiments/service.js', 'app/services/experiments.js'],
      ['app/pods/form/controller.js', 'app/controllers/form.js'],
      ['app/pods/form/route.js', 'app/routes/form.js'],
      ['app/pods/form/styles.css', 'app/styles/form.css'],
      ['app/pods/form/template.hbs', 'app/templates/form.hbs'],
      ['app/pods/index/route.js', 'app/routes/index.js'],
      ['app/pods/index/styles.css', 'app/styles/index.css'],
      ['app/pods/index/template.hbs', 'app/templates/index.hbs'],
      ['app/pods/product-details/route.js', 'app/routes/product-details.js'],
      ['app/pods/product-details/styles.css', 'app/styles/product-details.css'],
      [
        'app/pods/product-details/template.hbs',
        'app/templates/product-details.hbs',
      ],
      ['app/pods/product/model.js', 'app/models/product.js'],
      ['app/pods/products/controller.js', 'app/controllers/products.js'],
      ['app/pods/products/product/route.js', 'app/routes/products/product.js'],
      [
        'app/pods/products/product/styles.css',
        'app/styles/products/product.css',
      ],
      [
        'app/pods/products/product/template.hbs',
        'app/templates/products/product.hbs',
      ],
      ['app/pods/products/route.js', 'app/routes/products.js'],
      ['app/pods/products/styles.css', 'app/styles/products.css'],
      ['app/pods/products/template.hbs', 'app/templates/products.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/pods/components/navigation-menu/component-test.js',
        'tests/integration/components/navigation-menu-test.js',
      ],
      [
        'tests/integration/pods/components/product/card/component-test.js',
        'tests/integration/components/product/card-test.js',
      ],
      [
        'tests/integration/pods/components/product/details/component-test.js',
        'tests/integration/components/product/details-test.js',
      ],
      [
        'tests/integration/pods/components/product/image/component-test.js',
        'tests/integration/components/product/image-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/checkbox/component-test.js',
        'tests/integration/components/ui/form/checkbox-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/component-test.js',
        'tests/integration/components/ui/form-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/field/component-test.js',
        'tests/integration/components/ui/form/field-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/information/component-test.js',
        'tests/integration/components/ui/form/information-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/input/component-test.js',
        'tests/integration/components/ui/form/input-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/number/component-test.js',
        'tests/integration/components/ui/form/number-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/select/component-test.js',
        'tests/integration/components/ui/form/select-test.js',
      ],
      [
        'tests/integration/pods/components/ui/form/textarea/component-test.js',
        'tests/integration/components/ui/form/textarea-test.js',
      ],
      [
        'tests/integration/pods/components/ui/page/component-test.js',
        'tests/integration/components/ui/page-test.js',
      ],
      [
        'tests/unit/pods/application/route-test.js',
        'tests/unit/routes/application-test.js',
      ],
      [
        'tests/unit/pods/config/service-test.js',
        'tests/unit/services/config-test.js',
      ],
      [
        'tests/unit/pods/controllers/form/controller-test.js',
        'tests/unit/controllers/form-test.js',
      ],
      [
        'tests/unit/pods/controllers/products/controller-test.js',
        'tests/unit/controllers/products-test.js',
      ],
      [
        'tests/unit/pods/experiments/service-test.js',
        'tests/unit/services/experiments-test.js',
      ],
      [
        'tests/unit/pods/form/controller-test.js',
        'tests/unit/controllers/form-test.js',
      ],
      ['tests/unit/pods/form/route-test.js', 'tests/unit/routes/form-test.js'],
      [
        'tests/unit/pods/index/route-test.js',
        'tests/unit/routes/index-test.js',
      ],
      [
        'tests/unit/pods/product-details/route-test.js',
        'tests/unit/routes/product-details-test.js',
      ],
      [
        'tests/unit/pods/products/product/route-test.js',
        'tests/unit/routes/products/product-test.js',
      ],
      [
        'tests/unit/pods/products/route-test.js',
        'tests/unit/routes/products-test.js',
      ],
      [
        'tests/unit/pods/routes/application/route-test.js',
        'tests/unit/routes/application-test.js',
      ],
      [
        'tests/unit/pods/routes/form/route-test.js',
        'tests/unit/routes/form-test.js',
      ],
      [
        'tests/unit/pods/routes/index/route-test.js',
        'tests/unit/routes/index-test.js',
      ],
      [
        'tests/unit/pods/routes/product-details/route-test.js',
        'tests/unit/routes/product-details-test.js',
      ],
      [
        'tests/unit/pods/products/controller-test.js',
        'tests/unit/controllers/products-test.js',
      ],
      [
        'tests/unit/pods/routes/products/product/route-test.js',
        'tests/unit/routes/products/product-test.js',
      ],
      [
        'tests/unit/pods/routes/products/route-test.js',
        'tests/unit/routes/products-test.js',
      ],
    ]),
  );
});
