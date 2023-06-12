import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | services > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/config/service.ts', 'app/services/config.ts'],
    ['app/experiments/service.ts', 'app/services/experiments.ts'],
  ]);
});
