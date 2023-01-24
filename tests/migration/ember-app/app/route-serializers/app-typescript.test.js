import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-app/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-app | app | route-serializers > typescript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForRouteSerializers(options);

  assert.deepStrictEqual(migrationStrategy, [
    ['app/application/serializer.ts', 'app/serializers/application.ts'],
  ]);
});
