import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/addon/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | route-controllers > JavaScript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/products/controller.js', 'addon/controllers/products.js'],
  ]);
});
