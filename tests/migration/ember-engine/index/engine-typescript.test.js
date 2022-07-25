import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine-typescript.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

test('migration | ember-engine | index > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  migrateEmberEngine(options);

  assertFixture(outputProject, options);

  // Check idempotence
  migrateEmberEngine(options);

  assertFixture(outputProject, options);
});
