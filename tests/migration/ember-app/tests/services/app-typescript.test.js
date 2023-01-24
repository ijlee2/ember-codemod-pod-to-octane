import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | tests | services > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['tests/unit/config/service-test.ts', 'tests/unit/services/config-test.ts'],
    [
      'tests/unit/experiments/service-test.ts',
      'tests/unit/services/experiments-test.ts',
    ],
  ]);
});
