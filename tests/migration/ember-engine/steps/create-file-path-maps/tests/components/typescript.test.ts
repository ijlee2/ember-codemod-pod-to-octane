import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponents } from '../../../../../../../src/migration/ember-engine/steps/create-file-path-maps/tests/components.js';
import { inputProject } from '../../../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | tests | components > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponents(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/integration/components/product/card/component-test.ts',
      'tests/integration/components/product/card-test.ts',
    ],
    [
      'tests/integration/components/product/details/component-test.ts',
      'tests/integration/components/product/details-test.ts',
    ],
    [
      'tests/integration/components/product/image/component-test.ts',
      'tests/integration/components/product/image-test.ts',
    ],
  ]);
});
