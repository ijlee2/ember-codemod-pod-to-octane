import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | component-stylesheets > TypeScript', function () {
  loadFixture(inputProject, options);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
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
  ]);
});
