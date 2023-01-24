import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-controllers > pod path', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/form/controller.js', 'app/controllers/form.js'],
    ['app/pods/products/controller.js', 'app/controllers/products.js'],
  ]);
});
