import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app-typescript.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

test('migration | ember-app | index > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  migrateEmberApp(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberApp(options);

  assertFixture(outputProject, options);
});
