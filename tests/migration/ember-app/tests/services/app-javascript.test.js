import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | tests | services > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForServices(projectRoot), [
    ['tests/unit/config/service-test.js', 'tests/unit/services/config-test.js'],
    [
      'tests/unit/experiments/service-test.js',
      'tests/unit/services/experiments-test.js',
    ],
  ]);
});
