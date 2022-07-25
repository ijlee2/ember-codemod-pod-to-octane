import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-app/app/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | component-stylesheets > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(
    migrationStrategyForComponentStylesheets(projectRoot),
    [
      [
        'app/components/navigation-menu/styles.css',
        'app/components/navigation-menu.css',
      ],
      [
        'app/components/product/card/styles.css',
        'app/components/product/card.css',
      ],
      [
        'app/components/product/details/styles.scss',
        'app/components/product/details.scss',
      ],
      [
        'app/components/product/image/styles.css',
        'app/components/product/image.css',
      ],
      [
        'app/components/ui/form/checkbox/styles.css',
        'app/components/ui/form/checkbox.css',
      ],
      [
        'app/components/ui/form/field/styles.css',
        'app/components/ui/form/field.css',
      ],
      [
        'app/components/ui/form/information/styles.css',
        'app/components/ui/form/information.css',
      ],
      [
        'app/components/ui/form/input/styles.css',
        'app/components/ui/form/input.css',
      ],
      [
        'app/components/ui/form/number/styles.css',
        'app/components/ui/form/number.css',
      ],
      [
        'app/components/ui/form/select/styles.css',
        'app/components/ui/form/select.css',
      ],
      ['app/components/ui/form/styles.css', 'app/components/ui/form.css'],
      [
        'app/components/ui/form/textarea/styles.css',
        'app/components/ui/form/textarea.css',
      ],
      ['app/components/ui/page/styles.scss', 'app/components/ui/page.scss'],
    ]
  );
});
