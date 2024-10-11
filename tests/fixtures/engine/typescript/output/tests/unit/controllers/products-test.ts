import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Controller | products', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.engine.lookup('controller:products');
    assert.ok(controller);
  });
});
