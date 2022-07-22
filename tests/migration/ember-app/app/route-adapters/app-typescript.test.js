import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | route-adapters > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteAdapters(projectRoot), [
    ['app/application/adapter.ts', 'app/adapters/application.ts'],
  ]);
});
