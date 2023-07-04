import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForServices } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/tests/services.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | tests | services > pod path', function () {
  loadFixture(inputProject, codemodOptions);

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
