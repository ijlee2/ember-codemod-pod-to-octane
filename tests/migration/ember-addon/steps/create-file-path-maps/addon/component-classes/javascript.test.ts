import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentClasses } from '../../../../../../../src/migration/ember-addon/steps/create-file-path-maps/addon/component-classes.js';
import { inputProject } from '../../../../../../fixtures/ember-addon/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-addon/javascript.js';

test('migration | ember-addon | addon | component-classes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

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
