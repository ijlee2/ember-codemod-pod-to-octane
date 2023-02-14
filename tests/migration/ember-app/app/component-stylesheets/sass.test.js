import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-app/app/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-app/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/sass.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | component-stylesheets > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/components/navigation-menu/styles.scss',
      'app/components/navigation-menu.scss',
    ],
    [
      'app/components/product/card/styles.scss',
      'app/components/product/card.scss',
    ],
    [
      'app/components/product/details/styles.scss',
      'app/components/product/details.scss',
    ],
    [
      'app/components/product/image/styles.scss',
      'app/components/product/image.scss',
    ],
    [
      'app/components/ui/form/checkbox/styles.scss',
      'app/components/ui/form/checkbox.scss',
    ],
    [
      'app/components/ui/form/field/styles.scss',
      'app/components/ui/form/field.scss',
    ],
    [
      'app/components/ui/form/information/styles.scss',
      'app/components/ui/form/information.scss',
    ],
    [
      'app/components/ui/form/input/styles.scss',
      'app/components/ui/form/input.scss',
    ],
    [
      'app/components/ui/form/number/styles.scss',
      'app/components/ui/form/number.scss',
    ],
    [
      'app/components/ui/form/select/styles.scss',
      'app/components/ui/form/select.scss',
    ],
    ['app/components/ui/form/styles.scss', 'app/components/ui/form.scss'],
    [
      'app/components/ui/form/textarea/styles.scss',
      'app/components/ui/form/textarea.scss',
    ],
    ['app/components/ui/page/styles.scss', 'app/components/ui/page.scss'],
  ]);
});
