import { migrationStrategyForRouteModels } from '../../../../../src/migration/ember-app/app/route-models.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | route-models > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteModels(projectRoot), [
    ['app/product/model.js', 'app/models/product.js'],
  ]);
});
