import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteControllers } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/tests/route-controllers.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | tests | route-controllers > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'tests/unit/form/controller-test.ts',
      'tests/unit/controllers/form-test.ts',
    ],
    [
      'tests/unit/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
    [
      'tests/unit/controllers/form/controller-test.ts',
      'tests/unit/controllers/form-test.ts',
    ],
    [
      'tests/unit/controllers/products/controller-test.ts',
      'tests/unit/controllers/products-test.ts',
    ],
  ]);
});
