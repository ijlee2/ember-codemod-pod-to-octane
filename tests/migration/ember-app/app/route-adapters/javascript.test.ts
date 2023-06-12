import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteAdapters } from '../../../../../src/migration/ember-app/app/route-adapters.js';
import { inputProject } from '../../../../fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | route-adapters > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteAdapters(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/adapter.js', 'app/adapters/application.js'],
  ]);
});
