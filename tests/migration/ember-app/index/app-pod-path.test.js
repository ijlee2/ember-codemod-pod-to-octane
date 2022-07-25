import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import { inputProject, outputProject } from '../../../fixtures/app-pod-path.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

test('migration | ember-app | index > podPath', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  loadFixture(inputProject, options);

  migrateEmberApp(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberApp(options);

  assertFixture(outputProject, options);
});
