import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | tests | route-controllers > JavaScript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
    [
      'tests/unit/controllers/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
  ]);
});
