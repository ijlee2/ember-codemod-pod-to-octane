import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-controllers > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/form/controller.js', 'app/controllers/form.js'],
    ['app/products/controller.js', 'app/controllers/products.js'],
  ]);
});
