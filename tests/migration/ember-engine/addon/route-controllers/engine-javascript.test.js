import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/addon/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | addon | route-controllers > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    ['addon/products/controller.js', 'addon/controllers/products.js'],
  ]);
});
