import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | services > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/config/service.ts', 'app/services/config.ts'],
    ['app/experiments/service.ts', 'app/services/experiments.ts'],
  ]);
});
