import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-javascript';

test('migration | ember-app | app | route-serializers > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteSerializers(projectRoot), [
    ['app/application/serializer.js', 'app/serializers/application.js'],
  ]);
});
