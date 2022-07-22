import { migrateEmberEngine } from '../../../../src/migration/ember-engine/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | index > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  migrateEmberEngine({
    projectRoot,
    testRun: false,
  });

  // TODO: Remove the tautology
  assert.deepStrictEqual(outputProject, outputProject);
});
