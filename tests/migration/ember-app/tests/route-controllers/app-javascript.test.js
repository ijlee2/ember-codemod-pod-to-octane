import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | tests | route-controllers > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    [
      'tests/unit/form/controller-test.js',
      'tests/unit/controllers/form-test.js',
    ],
    [
      'tests/unit/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
    [
      'tests/unit/controllers/form/controller-test.js',
      'tests/unit/controllers/form-test.js',
    ],
    [
      'tests/unit/controllers/products/controller-test.js',
      'tests/unit/controllers/products-test.js',
    ],
  ]);
});
