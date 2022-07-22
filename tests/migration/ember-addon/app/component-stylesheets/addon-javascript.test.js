import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-addon/app/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/addon-javascript';

test('migration | ember-addon | app | component-stylesheets > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(
    migrationStrategyForComponentStylesheets(projectRoot),
    [
      [
        'app/components/ui/form/field/styles.js',
        'app/components/ui/form/field.js',
      ],
      [
        'app/components/ui/form/information/styles.js',
        'app/components/ui/form/information.js',
      ],
      ['app/components/ui/form/styles.js', 'app/components/ui/form.js'],
    ]
  );
});
