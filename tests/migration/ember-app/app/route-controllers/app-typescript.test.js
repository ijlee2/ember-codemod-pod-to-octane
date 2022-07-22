import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | route-controllers > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    ['app/form/controller.ts', 'app/controllers/form.ts'],
    ['app/products/controller.ts', 'app/controllers/products.ts'],
  ]);
});
