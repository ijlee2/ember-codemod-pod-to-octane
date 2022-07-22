import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/addon/route-controllers.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | addon | route-controllers > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteControllers(projectRoot), [
    ['addon/products/controller.ts', 'addon/controllers/products.ts'],
  ]);
});
