import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | services > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/config/service.js', 'app/services/config.js'],
    ['app/experiments/service.js', 'app/services/experiments.js'],
  ]);
});
