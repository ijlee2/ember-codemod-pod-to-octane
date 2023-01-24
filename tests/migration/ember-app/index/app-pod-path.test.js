import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import { inputProject, outputProject } from '../../../fixtures/app-pod-path.js';
import { options } from '../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('migration | ember-app | index > pod path', function () {
  loadFixture(inputProject, options);

  migrateEmberApp(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberApp(options);

  assertFixture(outputProject, options);
});
