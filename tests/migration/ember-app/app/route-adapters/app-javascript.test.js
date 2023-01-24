import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-adapters > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteAdapters(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/adapter.js', 'app/adapters/application.js'],
  ]);
});
