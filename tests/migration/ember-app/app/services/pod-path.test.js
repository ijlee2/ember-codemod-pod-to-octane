import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | services > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/config/service.js', 'app/services/config.js'],
    ['app/pods/experiments/service.js', 'app/services/experiments.js'],
  ]);
});
