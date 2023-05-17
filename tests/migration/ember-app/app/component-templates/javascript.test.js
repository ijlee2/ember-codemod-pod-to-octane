import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentTemplates } from '../../../../../src/migration/ember-app/app/component-templates.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | component-templates > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/components/navigation-menu/template.hbs',
      'app/components/navigation-menu.hbs',
    ],
    [
      'app/components/product/card/template.hbs',
      'app/components/product/card.hbs',
    ],
    [
      'app/components/product/details/template.hbs',
      'app/components/product/details.hbs',
    ],
    [
      'app/components/product/image/template.hbs',
      'app/components/product/image.hbs',
    ],
    [
      'app/components/ui/form/checkbox/template.hbs',
      'app/components/ui/form/checkbox.hbs',
    ],
    [
      'app/components/ui/form/field/template.hbs',
      'app/components/ui/form/field.hbs',
    ],
    [
      'app/components/ui/form/information/template.hbs',
      'app/components/ui/form/information.hbs',
    ],
    [
      'app/components/ui/form/input/template.hbs',
      'app/components/ui/form/input.hbs',
    ],
    [
      'app/components/ui/form/number/template.hbs',
      'app/components/ui/form/number.hbs',
    ],
    [
      'app/components/ui/form/select/template.hbs',
      'app/components/ui/form/select.hbs',
    ],
    ['app/components/ui/form/template.hbs', 'app/components/ui/form.hbs'],
    [
      'app/components/ui/form/textarea/template.hbs',
      'app/components/ui/form/textarea.hbs',
    ],
    ['app/components/ui/page/template.hbs', 'app/components/ui/page.hbs'],
  ]);
});
