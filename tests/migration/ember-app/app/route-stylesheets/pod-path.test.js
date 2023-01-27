import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/ember-app/pod-path/index.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/pod-path.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-serializers > pod path', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/pods/application/serializer.js', 'app/serializers/application.js'],
  ]);
});
