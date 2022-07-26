import { migrationStrategyForComponents } from '../../../../../src/migration/ember-engine/tests/components.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | tests | components > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
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
