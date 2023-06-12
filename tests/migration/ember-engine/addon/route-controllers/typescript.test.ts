import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-engine/addon/route-controllers.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';

test('migration | ember-engine | addon | route-controllers > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['addon/products/controller.ts', 'addon/controllers/products.ts'],
  ]);
});
