import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-addon/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-addon | addon | component-classes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(
    options.projectRoot
  );

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/ui/form/checkbox/component.js',
      'addon/components/ui/form/checkbox.js',
    ],
    ['addon/components/ui/form/component.js', 'addon/components/ui/form.js'],
    [
      'addon/components/ui/form/input/component.js',
      'addon/components/ui/form/input.js',
    ],
    [
      'addon/components/ui/form/number/component.js',
      'addon/components/ui/form/number.js',
    ],
    [
      'addon/components/ui/form/select/component.js',
      'addon/components/ui/form/select.js',
    ],
    [
      'addon/components/ui/form/textarea/component.js',
      'addon/components/ui/form/textarea.js',
    ],
  ]);
});
