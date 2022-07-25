import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/tests/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | tests | route-controllers > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-typescript',
    testRun: false,
  };

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
