import { render, setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | navigation-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <NavigationMenu
        @menuItems={{array
          (hash label="Home" route="index")
        }}
        @name="Main Navigation"
      />
    `);

    assert.ok(true);
  });
});
