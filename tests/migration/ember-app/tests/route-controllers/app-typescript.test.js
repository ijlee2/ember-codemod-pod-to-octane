import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | route-controllers > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
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
