import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | addon | component-stylesheets > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(
    migrationStrategyForComponentStylesheets(projectRoot),
    [
      [
        'addon/components/product/card/styles.css',
        'addon/components/product/card.css',
      ],
      [
        'addon/components/product/details/styles.css',
        'addon/components/product/details.css',
      ],
      [
        'addon/components/product/image/styles.css',
        'addon/components/product/image.css',
      ],
    ]
  );
});
