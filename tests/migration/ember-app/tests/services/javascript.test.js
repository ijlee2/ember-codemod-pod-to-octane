import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/javascript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | services > javascript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['tests/unit/config/service-test.js', 'tests/unit/services/config-test.js'],
    [
      'tests/unit/experiments/service-test.js',
      'tests/unit/services/experiments-test.js',
    ],
  ]);
});
