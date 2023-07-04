import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteAdapters } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/route-adapters.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | route-adapters > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteAdapters(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/adapter.ts', 'app/adapters/application.ts'],
  ]);
});
