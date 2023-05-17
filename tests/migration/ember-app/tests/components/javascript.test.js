import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponents } from '../../../../../src/migration/ember-app/tests/components.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | tests | components > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
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
  ]);
});
