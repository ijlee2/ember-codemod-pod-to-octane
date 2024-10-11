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
        'addon/components/ui/form/checkbox/component.ts',
        'addon/components/ui/form/checkbox.ts',
      ],
      [
        'addon/components/ui/form/checkbox/styles.css',
        'addon/components/ui/form/checkbox.css',
      ],
      [
        'addon/components/ui/form/checkbox/template.hbs',
        'addon/components/ui/form/checkbox.hbs',
      ],
      ['addon/components/ui/form/component.ts', 'addon/components/ui/form.ts'],
      [
        'addon/components/ui/form/field/component.d.ts',
        'addon/components/ui/form/field.d.ts',
      ],
      [
        'addon/components/ui/form/field/styles.css',
        'addon/components/ui/form/field.css',
      ],
      [
        'addon/components/ui/form/field/template.hbs',
        'addon/components/ui/form/field.hbs',
      ],
      [
        'addon/components/ui/form/information/component.d.ts',
        'addon/components/ui/form/information.d.ts',
      ],
      [
        'addon/components/ui/form/information/styles.css',
        'addon/components/ui/form/information.css',
      ],
      [
        'addon/components/ui/form/information/template.hbs',
        'addon/components/ui/form/information.hbs',
      ],
      [
        'addon/components/ui/form/input/component.ts',
        'addon/components/ui/form/input.ts',
      ],
      [
        'addon/components/ui/form/input/styles.css',
        'addon/components/ui/form/input.css',
      ],
      [
        'addon/components/ui/form/input/template.hbs',
        'addon/components/ui/form/input.hbs',
      ],
      [
        'addon/components/ui/form/number/component.ts',
        'addon/components/ui/form/number.ts',
      ],
      [
        'addon/components/ui/form/number/styles.css',
        'addon/components/ui/form/number.css',
      ],
      [
        'addon/components/ui/form/number/template.hbs',
        'addon/components/ui/form/number.hbs',
      ],
      [
        'addon/components/ui/form/select/component.ts',
        'addon/components/ui/form/select.ts',
      ],
      [
        'addon/components/ui/form/select/styles.css',
        'addon/components/ui/form/select.css',
      ],
      [
        'addon/components/ui/form/select/template.hbs',
        'addon/components/ui/form/select.hbs',
      ],
      ['addon/components/ui/form/styles.css', 'addon/components/ui/form.css'],
      ['addon/components/ui/form/template.hbs', 'addon/components/ui/form.hbs'],
      [
        'addon/components/ui/form/textarea/component.ts',
        'addon/components/ui/form/textarea.ts',
      ],
      [
        'addon/components/ui/form/textarea/styles.css',
        'addon/components/ui/form/textarea.css',
      ],
      [
        'addon/components/ui/form/textarea/template.hbs',
        'addon/components/ui/form/textarea.hbs',
      ],
      [
        'addon/components/ui/page/component.d.ts',
        'addon/components/ui/page.d.ts',
      ],
      ['addon/components/ui/page/styles.css', 'addon/components/ui/page.css'],
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
        'app/components/ui/form/field/template.js',
        'app/components/ui/form/field.js',
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
    ]),
  );
});
