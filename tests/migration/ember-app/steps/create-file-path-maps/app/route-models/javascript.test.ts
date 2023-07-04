import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteModels } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/route-models.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | route-models > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteModels(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/product/model.js', 'app/models/product.js'],
  ]);
});
