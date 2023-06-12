import {
  assertFixture,
  convertFixtureToJson,
  loadFixture,
  test,
} from '@codemod-utils/tests';

import { updateAbsolutePaths } from '../../../../../src/migration/ember-engine/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/absolute-imports.js';

test('migration | ember-engine | steps | update-absolute-paths > absolute-imports', function () {
  const inputProject = convertFixtureToJson(
    'ember-engine/steps/update-absolute-paths/absolute-imports/input',
  );

  const outputProject = convertFixtureToJson(
    'ember-engine/steps/update-absolute-paths/absolute-imports/output',
  );

  const migrationStrategy = new Map([
    [
      'addon/components/ui/password-reset-form/component.ts',
      'addon/components/ui/password-reset-form.ts',
    ],
    [
      'addon/components/ui/password-reset-page/component.ts',
      'addon/components/ui/password-reset-page.ts',
    ],
    ['addon/authenticated/controller.ts', 'addon/controllers/authenticated.ts'],
    [
      'addon/password-reset/controller.ts',
      'addon/controllers/password-reset.ts',
    ],
    ['addon/index/route.ts', 'addon/routes/index.ts'],
    [
      'tests/integration/components/ui/password-reset-form/component-test.ts',
      'tests/integration/components/ui/password-reset-form-test.ts',
    ],
    [
      'tests/integration/components/ui/password-reset-page/component-test.ts',
      'tests/integration/components/ui/password-reset-page-test.ts',
    ],
    [
      'tests/unit/authenticated/controller-test.ts',
      'tests/unit/controllers/authenticated-test.ts',
    ],
    ['tests/unit/index/route-test.ts', 'tests/unit/routes/index-test.ts'],
  ]);

  loadFixture(inputProject, codemodOptions);

  updateAbsolutePaths(migrationStrategy, options);

  assertFixture(outputProject, codemodOptions);
});
