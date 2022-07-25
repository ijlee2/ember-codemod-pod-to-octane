import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | services > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForServices(options.projectRoot);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/config/service.js', 'app/services/config.js'],
    ['app/experiments/service.js', 'app/services/experiments.js'],
  ]);
});
