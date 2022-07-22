import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-app/app/component-classes.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | component-classes > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentClasses(projectRoot), [
    [
      'app/components/product/details/component.js',
      'app/components/product/details.js',
    ],
    [
      'app/components/product/image/component.js',
      'app/components/product/image.js',
    ],
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
