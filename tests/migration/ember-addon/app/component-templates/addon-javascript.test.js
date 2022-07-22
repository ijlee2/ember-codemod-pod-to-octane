import { migrationStrategyForComponentTemplates } from '../../../../../src/migration/ember-addon/app/component-templates.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/addon-javascript';

test('migration | ember-addon | app | component-templates > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentTemplates(projectRoot), [
    [
      'app/components/ui/form/checkbox/template.js',
      'app/components/ui/form/checkbox.js',
    ],
    [
      'app/components/ui/form/field/template.js',
      'app/components/ui/form/field.js',
    ],
    [
      'app/components/ui/form/information/template.js',
      'app/components/ui/form/information.js',
    ],
    [
      'app/components/ui/form/input/template.js',
      'app/components/ui/form/input.js',
    ],
    [
      'app/components/ui/form/number/template.js',
      'app/components/ui/form/number.js',
    ],
    [
      'app/components/ui/form/select/template.js',
      'app/components/ui/form/select.js',
    ],
    ['app/components/ui/form/template.js', 'app/components/ui/form.js'],
    [
      'app/components/ui/form/textarea/template.js',
      'app/components/ui/form/textarea.js',
    ],
    ['app/components/ui/page/template.js', 'app/components/ui/page.js'],
  ]);
});
