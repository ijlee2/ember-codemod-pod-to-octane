import { render, setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | ui/page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Ui::Page @title="Form">
        <div data-test-content>
          Content goes here.
        </div>
      </Ui::Page>
    `);

    assert.ok(true);
  });
});
