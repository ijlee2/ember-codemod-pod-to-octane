import { useAbsolutePaths } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/relative-imports.js';
import {
  assertFixture,
  convertFixtureToJson,
  loadFixture,
  test,
} from '../../../../helpers/testing.js';

test('migration | ember-engine | steps | use-absolute-paths > relative-imports', function () {
  const inputProject = convertFixtureToJson(
    'ember-engine/steps/use-absolute-paths/relative-imports/input',
  );

  const outputProject = convertFixtureToJson(
    'ember-engine/steps/use-absolute-paths/relative-imports/output',
  );

  loadFixture(inputProject, codemodOptions);

  useAbsolutePaths(options);

  assertFixture(outputProject, codemodOptions);
});
