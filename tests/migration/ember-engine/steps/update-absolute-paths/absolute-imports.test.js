import { updateAbsolutePaths } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/absolute-imports.js';
import {
  assertFixture,
  convertFixtureToJson,
  loadFixture,
  test,
} from '../../../../helpers/testing.js';

test('migration | ember-engine | steps | update-absolute-paths > absolute-imports', function () {
  const inputProject = convertFixtureToJson(
    'ember-engine/steps/update-absolute-paths/absolute-imports/input'
  );

  const outputProject = convertFixtureToJson(
    'ember-engine/steps/update-absolute-paths/absolute-imports/output'
  );

  loadFixture(inputProject, codemodOptions);

  updateAbsolutePaths(options);

  assertFixture(outputProject, codemodOptions);
});
