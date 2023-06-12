import {
  assertFixture,
  convertFixtureToJson,
  loadFixture,
  test,
} from '@codemod-utils/tests';

import { useAbsolutePaths } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/relative-imports.js';

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
