import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | tests | route-controllers > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
    [
      'tests/unit/controllers/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
  ]);
});
