import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-adapters > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteAdapters(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/adapter.ts', 'app/adapters/application.ts'],
  ]);
});
