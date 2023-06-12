import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/ember-app/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/typescript.js';

test('migration | ember-app | app | route-serializers > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/serializer.ts', 'app/serializers/application.ts'],
  ]);
});
