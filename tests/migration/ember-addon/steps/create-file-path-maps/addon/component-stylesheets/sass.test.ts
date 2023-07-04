import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentStylesheets } from '../../../../../../../src/migration/ember-addon/steps/create-file-path-maps/addon/component-stylesheets.js';
import { inputProject } from '../../../../../../fixtures/ember-addon/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-addon/sass.js';

test('migration | ember-addon | addon | component-stylesheets > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/ui/form/checkbox/styles.scss',
      'addon/components/ui/form/checkbox.scss',
    ],
    [
      'addon/components/ui/form/field/styles.scss',
      'addon/components/ui/form/field.scss',
    ],
    [
      'addon/components/ui/form/information/styles.scss',
      'addon/components/ui/form/information.scss',
    ],
    [
      'addon/components/ui/form/input/styles.scss',
      'addon/components/ui/form/input.scss',
    ],
    [
      'addon/components/ui/form/number/styles.scss',
      'addon/components/ui/form/number.scss',
    ],
    [
      'addon/components/ui/form/select/styles.scss',
      'addon/components/ui/form/select.scss',
    ],
    ['addon/components/ui/form/styles.scss', 'addon/components/ui/form.scss'],
    [
      'addon/components/ui/form/textarea/styles.scss',
      'addon/components/ui/form/textarea.scss',
    ],
    ['addon/components/ui/page/styles.scss', 'addon/components/ui/page.scss'],
  ]);
});
