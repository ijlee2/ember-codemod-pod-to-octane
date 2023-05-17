import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteModels } from '../../../../../src/migration/ember-app/app/route-models.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | route-models > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteModels(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/product/model.ts', 'app/models/product.ts'],
  ]);
});
