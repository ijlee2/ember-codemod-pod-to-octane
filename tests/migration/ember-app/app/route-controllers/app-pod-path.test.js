import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-controllers > podPath', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/form/controller.js', 'app/controllers/form.js'],
    ['app/pods/products/controller.js', 'app/controllers/products.js'],
  ]);
});
