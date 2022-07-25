import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | addon | component-stylesheets > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(
    migrationStrategyForComponentStylesheets(projectRoot),
    [
      [
        'addon/components/product/card/styles.css',
        'addon/components/product/card.css',
      ],
      [
        'addon/components/product/details/styles.scss',
        'addon/components/product/details.scss',
      ],
      [
        'addon/components/product/image/styles.css',
        'addon/components/product/image.css',
      ],
    ]
  );
});
