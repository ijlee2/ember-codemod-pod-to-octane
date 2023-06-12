import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';

test('migration | ember-app | app | route-serializers > pod path', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/application/serializer.js', 'app/serializers/application.js'],
  ]);
});
