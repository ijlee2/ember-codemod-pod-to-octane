import {
  assertFixture,
  convertFixtureToJson,
  loadFixture,
  test,
} from '@codemod-utils/tests';

import { useRelativePaths } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/absolute-imports.js';

test('migration | ember-engine | steps | use-relative-paths > absolute-imports', function () {
  const inputProject = convertFixtureToJson(
    'ember-engine/steps/use-relative-paths/absolute-imports/input',
  );

  const outputProject = convertFixtureToJson(
    'ember-engine/steps/use-relative-paths/absolute-imports/output',
  );

  loadFixture(inputProject, codemodOptions);

  useRelativePaths(options);

  assertFixture(outputProject, codemodOptions);
});
