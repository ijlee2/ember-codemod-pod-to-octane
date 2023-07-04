import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/ember-addon/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-addon/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-addon/sass.js';

test('migration | ember-addon | steps | create-file-path-maps > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/components/ui/form/checkbox/component.js',
        'addon/components/ui/form/checkbox.js',
      ],
      [
        'addon/components/ui/form/checkbox/styles.scss',
        'addon/components/ui/form/checkbox.scss',
      ],
      [
        'addon/components/ui/form/checkbox/template.hbs',
        'addon/components/ui/form/checkbox.hbs',
      ],
      ['addon/components/ui/form/component.js', 'addon/components/ui/form.js'],
      [
        'addon/components/ui/form/field/styles.scss',
        'addon/components/ui/form/field.scss',
      ],
      [
        'addon/components/ui/form/field/template.hbs',
        'addon/components/ui/form/field.hbs',
      ],
      [
        'addon/components/ui/form/information/styles.scss',
        'addon/components/ui/form/information.scss',
      ],
      [
        'addon/components/ui/form/information/template.hbs',
        'addon/components/ui/form/information.hbs',
      ],
      [
        'addon/components/ui/form/input/component.js',
        'addon/components/ui/form/input.js',
      ],
      [
        'addon/components/ui/form/input/styles.scss',
        'addon/components/ui/form/input.scss',
      ],
      [
        'addon/components/ui/form/input/template.hbs',
        'addon/components/ui/form/input.hbs',
      ],
      [
        'addon/components/ui/form/number/component.js',
        'addon/components/ui/form/number.js',
      ],
      [
        'addon/components/ui/form/number/styles.scss',
        'addon/components/ui/form/number.scss',
      ],
      [
        'addon/components/ui/form/number/template.hbs',
        'addon/components/ui/form/number.hbs',
      ],
      [
        'addon/components/ui/form/select/component.js',
        'addon/components/ui/form/select.js',
      ],
      [
        'addon/components/ui/form/select/styles.scss',
        'addon/components/ui/form/select.scss',
      ],
      [
        'addon/components/ui/form/select/template.hbs',
        'addon/components/ui/form/select.hbs',
      ],
      ['addon/components/ui/form/styles.scss', 'addon/components/ui/form.scss'],
      ['addon/components/ui/form/template.hbs', 'addon/components/ui/form.hbs'],
      [
        'addon/components/ui/form/textarea/component.js',
        'addon/components/ui/form/textarea.js',
      ],
      [
        'addon/components/ui/form/textarea/styles.scss',
        'addon/components/ui/form/textarea.scss',
      ],
      [
        'addon/components/ui/form/textarea/template.hbs',
        'addon/components/ui/form/textarea.hbs',
      ],
      ['addon/components/ui/page/styles.scss', 'addon/components/ui/page.scss'],
      ['addon/components/ui/page/template.hbs', 'addon/components/ui/page.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([
      [
        'app/components/ui/form/checkbox/component.js',
        'app/components/ui/form/checkbox.js',
      ],
      [
        'app/components/ui/form/checkbox/template.js',
        'app/components/ui/form/checkbox.js',
      ],
      ['app/components/ui/form/component.js', 'app/components/ui/form.js'],
      [
        'app/components/ui/form/field/styles.js',
        'app/components/ui/form/field.js',
      ],
      [
        'app/components/ui/form/field/template.js',
        'app/components/ui/form/field.js',
      ],
      [
        'app/components/ui/form/information/styles.js',
        'app/components/ui/form/information.js',
      ],
      [
        'app/components/ui/form/information/template.js',
        'app/components/ui/form/information.js',
      ],
      [
        'app/components/ui/form/input/component.js',
        'app/components/ui/form/input.js',
      ],
      [
        'app/components/ui/form/input/template.js',
        'app/components/ui/form/input.js',
      ],
      [
        'app/components/ui/form/number/component.js',
        'app/components/ui/form/number.js',
      ],
      [
        'app/components/ui/form/number/template.js',
        'app/components/ui/form/number.js',
      ],
      [
        'app/components/ui/form/select/component.js',
        'app/components/ui/form/select.js',
      ],
      [
        'app/components/ui/form/select/template.js',
        'app/components/ui/form/select.js',
      ],
      ['app/components/ui/form/styles.js', 'app/components/ui/form.js'],
      ['app/components/ui/form/template.js', 'app/components/ui/form.js'],
      [
        'app/components/ui/form/textarea/component.js',
        'app/components/ui/form/textarea.js',
      ],
      [
        'app/components/ui/form/textarea/template.js',
        'app/components/ui/form/textarea.js',
      ],
      ['app/components/ui/page/template.js', 'app/components/ui/page.js'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
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
    ]),
  );
});
