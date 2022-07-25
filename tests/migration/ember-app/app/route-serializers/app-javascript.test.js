import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/app-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-app | app | route-serializers > JavaScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/app-javascript',
    testRun: false,
  };

  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/serializer.js', 'app/serializers/application.js'],
  ]);
});
