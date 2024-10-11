import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | products', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.engine.lookup('route:products');
    assert.ok(route);
  });
});
