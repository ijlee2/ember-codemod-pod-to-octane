import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-addon/app/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-addon/javascript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-addon/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-addon | app | component-stylesheets > javascript', function () {
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
