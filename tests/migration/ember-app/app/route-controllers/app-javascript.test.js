import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | route-controllers > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    ['app/form/controller.js', 'app/controllers/form.js'],
    ['app/products/controller.js', 'app/controllers/products.js'],
  ]);
});
