import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-engine/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | component-classes > TypeScript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/product/card/component.d.ts',
      'addon/components/product/card.d.ts',
    ],
    [
      'addon/components/product/details/component.ts',
      'addon/components/product/details.ts',
    ],
    [
      'addon/components/product/image/component.ts',
      'addon/components/product/image.ts',
    ],
  ]);
});
