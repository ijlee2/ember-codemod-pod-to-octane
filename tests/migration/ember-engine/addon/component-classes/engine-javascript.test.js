import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-engine/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | addon | component-classes > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentClasses(projectRoot), [
    [
      'addon/components/product/details/component.js',
      'addon/components/product/details.js',
    ],
    [
      'addon/components/product/image/component.js',
      'addon/components/product/image.js',
    ],
  ]);
});
