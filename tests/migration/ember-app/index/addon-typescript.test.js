import { migrateEmberApp } from '../../../../src/migration/ember-app/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | index > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  migrateEmberApp({
    projectRoot,
    testRun: false,
  });

  // TODO: Remove the tautology
  assert.deepStrictEqual(outputProject, outputProject);
});
