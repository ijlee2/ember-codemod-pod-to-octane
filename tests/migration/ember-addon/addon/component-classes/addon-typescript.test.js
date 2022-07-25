import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-addon/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/addon-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-addon | addon | component-classes > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(
    options.projectRoot
  );

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/ui/form/checkbox/component.ts',
      'addon/components/ui/form/checkbox.ts',
    ],
    ['addon/components/ui/form/component.ts', 'addon/components/ui/form.ts'],
    [
      'addon/components/ui/form/field/component.d.ts',
      'addon/components/ui/form/field.d.ts',
    ],
    [
      'addon/components/ui/form/information/component.d.ts',
      'addon/components/ui/form/information.d.ts',
    ],
    [
      'addon/components/ui/form/input/component.ts',
      'addon/components/ui/form/input.ts',
    ],
    [
      'addon/components/ui/form/number/component.ts',
      'addon/components/ui/form/number.ts',
    ],
    [
      'addon/components/ui/form/select/component.ts',
      'addon/components/ui/form/select.ts',
    ],
    [
      'addon/components/ui/form/textarea/component.ts',
      'addon/components/ui/form/textarea.ts',
    ],
    [
      'addon/components/ui/page/component.d.ts',
      'addon/components/ui/page.d.ts',
    ],
  ]);
});
