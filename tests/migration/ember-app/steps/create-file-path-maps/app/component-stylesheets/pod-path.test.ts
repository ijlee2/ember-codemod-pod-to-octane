import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentStylesheets } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/component-stylesheets.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | app | component-stylesheets > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/pods/components/navigation-menu/styles.css',
      'app/components/navigation-menu.css',
    ],
    [
      'app/pods/components/product/card/styles.css',
      'app/components/product/card.css',
    ],
    [
      'app/pods/components/product/details/styles.css',
      'app/components/product/details.css',
    ],
    [
      'app/pods/components/product/image/styles.css',
      'app/components/product/image.css',
    ],
    [
      'app/pods/components/ui/form/checkbox/styles.css',
      'app/components/ui/form/checkbox.css',
    ],
    [
      'app/pods/components/ui/form/field/styles.css',
      'app/components/ui/form/field.css',
    ],
    [
      'app/pods/components/ui/form/information/styles.css',
      'app/components/ui/form/information.css',
    ],
    [
      'app/pods/components/ui/form/input/styles.css',
      'app/components/ui/form/input.css',
    ],
    [
      'app/pods/components/ui/form/number/styles.css',
      'app/components/ui/form/number.css',
    ],
    [
      'app/pods/components/ui/form/select/styles.css',
      'app/components/ui/form/select.css',
    ],
    ['app/pods/components/ui/form/styles.css', 'app/components/ui/form.css'],
    [
      'app/pods/components/ui/form/textarea/styles.css',
      'app/components/ui/form/textarea.css',
    ],
    ['app/pods/components/ui/page/styles.css', 'app/components/ui/page.css'],
  ]);
});
