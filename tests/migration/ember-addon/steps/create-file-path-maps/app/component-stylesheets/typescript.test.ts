import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentStylesheets } from '../../../../../../../src/migration/ember-addon/steps/create-file-path-maps/app/component-stylesheets.js';
import { inputProject } from '../../../../../../fixtures/ember-addon/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-addon/typescript.js';

test('migration | ember-addon | app | component-stylesheets > typescript', function () {
  loadFixture(inputProject, codemodOptions);

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
