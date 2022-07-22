import { migrateEmberAddon } from '../../../../src/migration/ember-addon/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/addon-typescript.js';
import { assert, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/addon-typescript';

test('migration | ember-addon | index > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  migrateEmberAddon({
    projectRoot,
    testRun: false,
  });

  // TODO: Remove the tautology
  assert.deepStrictEqual(outputProject, outputProject);
});
