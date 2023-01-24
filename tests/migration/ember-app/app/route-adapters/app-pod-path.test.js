import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-adapters > podPath', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteAdapters(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/application/adapter.js', 'app/adapters/application.js'],
  ]);
});
