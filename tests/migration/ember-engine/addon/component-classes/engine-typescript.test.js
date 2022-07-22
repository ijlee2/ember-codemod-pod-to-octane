import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-engine/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | addon | component-classes > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentClasses(projectRoot), [
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
