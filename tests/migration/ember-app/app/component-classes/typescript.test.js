import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-app/app/component-classes.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | component-classes > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/components/navigation-menu/component.d.ts',
      'app/components/navigation-menu.d.ts',
    ],
    [
      'app/components/product/card/component.d.ts',
      'app/components/product/card.d.ts',
    ],
    [
      'app/components/product/details/component.ts',
      'app/components/product/details.ts',
    ],
    [
      'app/components/product/image/component.ts',
      'app/components/product/image.ts',
    ],
    [
      'app/components/ui/form/checkbox/component.ts',
      'app/components/ui/form/checkbox.ts',
    ],
    ['app/components/ui/form/component.ts', 'app/components/ui/form.ts'],
    [
      'app/components/ui/form/field/component.d.ts',
      'app/components/ui/form/field.d.ts',
    ],
    [
      'app/components/ui/form/information/component.d.ts',
      'app/components/ui/form/information.d.ts',
    ],
    [
      'app/components/ui/form/input/component.ts',
      'app/components/ui/form/input.ts',
    ],
    [
      'app/components/ui/form/number/component.ts',
      'app/components/ui/form/number.ts',
    ],
    [
      'app/components/ui/form/select/component.ts',
      'app/components/ui/form/select.ts',
    ],
    [
      'app/components/ui/form/textarea/component.ts',
      'app/components/ui/form/textarea.ts',
    ],
    ['app/components/ui/page/component.d.ts', 'app/components/ui/page.d.ts'],
  ]);
});
