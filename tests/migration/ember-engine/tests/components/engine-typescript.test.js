import { migrationStrategyForComponents } from '../../../../../src/migration/ember-engine/tests/components.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | tests | components > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponents(projectRoot), [
    [
      'tests/integration/components/product/card/component-test.ts',
      'tests/integration/components/product/card-test.ts',
    ],
    [
      'tests/integration/components/product/details/component-test.ts',
      'tests/integration/components/product/details-test.ts',
    ],
    [
      'tests/integration/components/product/image/component-test.ts',
      'tests/integration/components/product/image-test.ts',
    ],
  ]);
});
