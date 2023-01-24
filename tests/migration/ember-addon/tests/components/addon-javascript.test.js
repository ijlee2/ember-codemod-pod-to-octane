import { migrationStrategyForComponents } from '../../../../../src/migration/ember-addon/tests/components.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-addon/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-addon | tests | components > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
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
