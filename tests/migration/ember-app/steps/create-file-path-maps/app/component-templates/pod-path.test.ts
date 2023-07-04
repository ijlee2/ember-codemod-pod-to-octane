import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentTemplates } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/component-templates.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | app | component-templates > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/pods/components/navigation-menu/template.hbs',
      'app/components/navigation-menu.hbs',
    ],
    [
      'app/pods/components/product/card/template.hbs',
      'app/components/product/card.hbs',
    ],
    [
      'app/pods/components/product/details/template.hbs',
      'app/components/product/details.hbs',
    ],
    [
      'app/pods/components/product/image/template.hbs',
      'app/components/product/image.hbs',
    ],
    [
      'app/pods/components/ui/form/checkbox/template.hbs',
      'app/components/ui/form/checkbox.hbs',
    ],
    [
      'app/pods/components/ui/form/field/template.hbs',
      'app/components/ui/form/field.hbs',
    ],
    [
      'app/pods/components/ui/form/information/template.hbs',
      'app/components/ui/form/information.hbs',
    ],
    [
      'app/pods/components/ui/form/input/template.hbs',
      'app/components/ui/form/input.hbs',
    ],
    [
      'app/pods/components/ui/form/number/template.hbs',
      'app/components/ui/form/number.hbs',
    ],
    [
      'app/pods/components/ui/form/select/template.hbs',
      'app/components/ui/form/select.hbs',
    ],
    ['app/pods/components/ui/form/template.hbs', 'app/components/ui/form.hbs'],
    [
      'app/pods/components/ui/form/textarea/template.hbs',
      'app/components/ui/form/textarea.hbs',
    ],
    ['app/pods/components/ui/page/template.hbs', 'app/components/ui/page.hbs'],
  ]);
});
