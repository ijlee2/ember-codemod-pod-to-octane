import { migrationStrategyForRouteModels } from '../../../../../src/migration/ember-app/app/route-models.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-models > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteModels(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/product/model.ts', 'app/models/product.ts'],
  ]);
});
