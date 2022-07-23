import { migrationStrategyForServices } from '../../../../../src/migration/ember-app/app/services.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | services > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForServices(projectRoot), [
    ['app/config/service.ts', 'app/services/config.ts'],
    ['app/experiments/service.ts', 'app/services/experiments.ts'],
  ]);
});
