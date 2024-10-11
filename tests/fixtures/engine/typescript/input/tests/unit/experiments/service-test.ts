import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | experiments', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.engine.lookup('service:experiments');
    assert.ok(service);
  });
});
