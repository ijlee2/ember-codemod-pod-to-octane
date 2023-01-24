import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-addon/app/component-classes.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-addon | app | component-classes > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
    ['app/components/ui/form/component.js', 'app/components/ui/form.js'],
    [
      'app/components/ui/form/input/component.js',
      'app/components/ui/form/input.js',
    ],
    [
      'app/components/ui/form/number/component.js',
      'app/components/ui/form/number.js',
    ],
    [
      'app/components/ui/form/select/component.js',
      'app/components/ui/form/select.js',
    ],
    [
      'app/components/ui/form/textarea/component.js',
      'app/components/ui/form/textarea.js',
    ],
  ]);
});
