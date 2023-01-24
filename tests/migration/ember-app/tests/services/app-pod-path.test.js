import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | services > pod path', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/pods/config/service-test.js',
      'tests/unit/services/config-test.js',
    ],
    [
      'tests/unit/pods/experiments/service-test.js',
      'tests/unit/services/experiments-test.js',
    ],
  ]);
});
