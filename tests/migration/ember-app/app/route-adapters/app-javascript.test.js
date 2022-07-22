import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | route-adapters > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteAdapters(projectRoot), [
    ['app/application/adapter.js', 'app/adapters/application.js'],
  ]);
});
