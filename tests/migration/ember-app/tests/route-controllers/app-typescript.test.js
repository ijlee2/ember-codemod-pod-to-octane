import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | tests | route-controllers > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    [
      'tests/unit/form/controller-test.ts',
      'tests/unit/controllers/form-test.ts',
    ],
    [
      'tests/unit/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
    [
      'tests/unit/controllers/form/controller-test.ts',
      'tests/unit/controllers/form-test.ts',
    ],
    [
      'tests/unit/controllers/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
  ]);
});
