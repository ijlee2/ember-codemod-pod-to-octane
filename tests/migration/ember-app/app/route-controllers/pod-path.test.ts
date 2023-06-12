import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteControllers } from '../../../../../src/migration/ember-app/app/route-controllers.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | app | route-controllers > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteControllers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/form/controller.js', 'app/controllers/form.js'],
    ['app/pods/products/controller.js', 'app/controllers/products.js'],
  ]);
});
