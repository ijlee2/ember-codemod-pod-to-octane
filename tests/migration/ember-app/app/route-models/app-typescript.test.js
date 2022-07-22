import { migrationStrategyForRouteModels } from '../../../../../src/migration/ember-app/app/route-models.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | route-models > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteModels(projectRoot), [
    ['app/product/model.ts', 'app/models/product.ts'],
  ]);
});
