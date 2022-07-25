import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-addon/app/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/addon-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-addon | app | component-stylesheets > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/components/ui/form/field/styles.js',
      'app/components/ui/form/field.js',
    ],
    [
      'app/components/ui/form/information/styles.js',
      'app/components/ui/form/information.js',
    ],
    ['app/components/ui/form/styles.js', 'app/components/ui/form.js'],
  ]);
});
