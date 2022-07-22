import { migrationStrategyForRouteSerializers } from '../../../../../src/migration/ember-app/app/route-serializers.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | app | route-serializers > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteSerializers(projectRoot), [
    ['app/application/serializer.ts', 'app/serializers/application.ts'],
  ]);
});
