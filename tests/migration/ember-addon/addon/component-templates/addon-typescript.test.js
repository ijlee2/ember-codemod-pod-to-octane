import { migrationStrategyForComponentTemplates } from '../../../../../src/migration/ember-addon/addon/component-templates.js';
import { inputProject } from '../../../../fixtures/addon-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-addon | addon | component-templates > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/ui/form/checkbox/template.hbs',
      'addon/components/ui/form/checkbox.hbs',
    ],
    [
      'addon/components/ui/form/field/template.hbs',
      'addon/components/ui/form/field.hbs',
    ],
    [
      'addon/components/ui/form/information/template.hbs',
      'addon/components/ui/form/information.hbs',
    ],
    [
      'addon/components/ui/form/input/template.hbs',
      'addon/components/ui/form/input.hbs',
    ],
    [
      'addon/components/ui/form/number/template.hbs',
      'addon/components/ui/form/number.hbs',
    ],
    [
      'addon/components/ui/form/select/template.hbs',
      'addon/components/ui/form/select.hbs',
    ],
    ['addon/components/ui/form/template.hbs', 'addon/components/ui/form.hbs'],
    [
      'addon/components/ui/form/textarea/template.hbs',
      'addon/components/ui/form/textarea.hbs',
    ],
    ['addon/components/ui/page/template.hbs', 'addon/components/ui/page.hbs'],
  ]);
});
