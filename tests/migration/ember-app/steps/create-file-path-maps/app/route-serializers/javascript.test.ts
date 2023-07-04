import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForRouteSerializers } from '../../../../../../../src/migration/ember-app/steps/create-file-path-maps/app/route-serializers.js';
import { inputProject } from '../../../../../..//fixtures/ember-app/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../..//helpers/shared-test-setups/ember-app/javascript.js';

test('migration | ember-app | app | route-serializers > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/serializer.js', 'app/serializers/application.js'],
  ]);
});
