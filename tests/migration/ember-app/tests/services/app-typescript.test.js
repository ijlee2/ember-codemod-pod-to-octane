import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | tests | services > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForServices(projectRoot), [
    ['tests/unit/config/service-test.ts', 'tests/unit/services/config-test.ts'],
    [
      'tests/unit/experiments/service-test.ts',
      'tests/unit/services/experiments-test.ts',
    ],
  ]);
});
