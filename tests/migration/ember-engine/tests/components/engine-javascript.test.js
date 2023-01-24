import { migrationStrategyForComponents } from '../../../../../src/migration/ember-engine/tests/components.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | tests | components > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
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
