import { migrationStrategyForRouteModels } from '../../../../../src/migration/ember-app/app/route-models.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-models > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteModels(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/product/model.js', 'app/models/product.js'],
  ]);
});
