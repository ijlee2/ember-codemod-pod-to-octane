import { migrationStrategyForComponents } from '../../../../../src/migration/ember-engine/tests/components.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | tests | components > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponents(projectRoot), [
    [
      'tests/integration/components/product/card/component-test.js',
      'tests/integration/components/product/card-test.js',
    ],
    [
      'tests/integration/components/product/details/component-test.js',
      'tests/integration/components/product/details-test.js',
    ],
    [
      'tests/integration/components/product/image/component-test.js',
      'tests/integration/components/product/image-test.js',
    ],
  ]);
});
