import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/tests/services.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | tests | services > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['tests/unit/config/service-test.ts', 'tests/unit/services/config-test.ts'],
    [
      'tests/unit/experiments/service-test.ts',
      'tests/unit/services/experiments-test.ts',
    ],
  ]);
});
