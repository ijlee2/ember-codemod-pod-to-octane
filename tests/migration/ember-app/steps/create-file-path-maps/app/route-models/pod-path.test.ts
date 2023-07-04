import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteModels } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/route-models.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | app | route-models > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteModels(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/product/model.js', 'app/models/product.js'],
  ]);
});
