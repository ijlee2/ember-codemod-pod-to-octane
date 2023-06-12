import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-addon/app/component-classes.js';
import { inputProject } from '../../../../fixtures/ember-addon/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-addon/javascript.js';

test('migration | ember-addon | app | component-classes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

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
