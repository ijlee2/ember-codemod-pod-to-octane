import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-controllers > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/form/controller.ts', 'app/controllers/form.ts'],
    ['app/products/controller.ts', 'app/controllers/products.ts'],
  ]);
});
