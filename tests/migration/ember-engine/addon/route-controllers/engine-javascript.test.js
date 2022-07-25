import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/addon/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | addon | route-controllers > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/products/controller.js', 'addon/controllers/products.js'],
  ]);
});
