import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/app-pod-path.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | services > podPath', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/config/service.js', 'app/services/config.js'],
    ['app/pods/experiments/service.js', 'app/services/experiments.js'],
  ]);
});
