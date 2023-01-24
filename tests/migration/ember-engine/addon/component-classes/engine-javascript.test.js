import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-engine/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | component-classes > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
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
