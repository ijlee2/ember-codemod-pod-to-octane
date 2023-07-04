import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponents } from '../../../../../../../src/migration/ember-addon/steps/create-file-path-maps/tests/components.js';
import { inputProject } from '../../../../../../fixtures/ember-addon/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-addon/typescript.js';

test('migration | ember-addon | tests | components > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/integration/components/ui/form/checkbox/component-test.ts',
      'tests/integration/components/ui/form/checkbox-test.ts',
    ],
    [
      'tests/integration/components/ui/form/component-test.ts',
      'tests/integration/components/ui/form-test.ts',
    ],
    [
      'tests/integration/components/ui/form/field/component-test.ts',
      'tests/integration/components/ui/form/field-test.ts',
    ],
    [
      'tests/integration/components/ui/form/information/component-test.ts',
      'tests/integration/components/ui/form/information-test.ts',
    ],
    [
      'tests/integration/components/ui/form/input/component-test.ts',
      'tests/integration/components/ui/form/input-test.ts',
    ],
    [
      'tests/integration/components/ui/form/number/component-test.ts',
      'tests/integration/components/ui/form/number-test.ts',
    ],
    [
      'tests/integration/components/ui/form/select/component-test.ts',
      'tests/integration/components/ui/form/select-test.ts',
    ],
    [
      'tests/integration/components/ui/form/textarea/component-test.ts',
      'tests/integration/components/ui/form/textarea-test.ts',
    ],
    [
      'tests/integration/components/ui/page/component-test.ts',
      'tests/integration/components/ui/page-test.ts',
    ],
  ]);
});
