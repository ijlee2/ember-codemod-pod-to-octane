import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForServices } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/services.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | services > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/config/service.js', 'app/services/config.js'],
    ['app/experiments/service.js', 'app/services/experiments.js'],
  ]);
});
