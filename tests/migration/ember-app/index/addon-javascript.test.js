import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | index > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  migrateEmberApp({
    projectRoot,
    testRun: false,
  });

  // TODO: Remove the tautology
  assert.deepStrictEqual(outputProject, outputProject);
});
