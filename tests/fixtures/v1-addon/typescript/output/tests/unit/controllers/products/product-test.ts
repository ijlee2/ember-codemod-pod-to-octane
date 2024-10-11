import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Controller | products/product', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:products/product');
    assert.ok(controller);
  });
});
