import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | products/product', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:products/product');
    assert.ok(route);
  });
});
