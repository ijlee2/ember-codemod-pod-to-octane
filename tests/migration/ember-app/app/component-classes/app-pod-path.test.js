import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-app/app/component-classes.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | component-classes > pod path', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'app/pods/components/product/details/component.js',
      'app/components/product/details.js',
    ],
    [
      'app/pods/components/product/image/component.js',
      'app/components/product/image.js',
    ],
    [
      'app/pods/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
    ['app/pods/components/ui/form/component.js', 'app/components/ui/form.js'],
    [
      'app/pods/components/ui/form/input/component.js',
      'app/components/ui/form/input.js',
    ],
    [
      'app/pods/components/ui/form/number/component.js',
      'app/components/ui/form/number.js',
    ],
    [
      'app/pods/components/ui/form/select/component.js',
      'app/components/ui/form/select.js',
    ],
    [
      'app/pods/components/ui/form/textarea/component.js',
      'app/components/ui/form/textarea.js',
    ],
  ]);
});
