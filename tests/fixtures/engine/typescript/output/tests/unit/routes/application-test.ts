import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.engine.lookup('route:application');
    assert.ok(route);
  });
});
