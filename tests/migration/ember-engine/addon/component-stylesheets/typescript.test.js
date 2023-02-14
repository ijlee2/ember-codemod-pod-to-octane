import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/typescript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | component-stylesheets > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
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
  ]);
});
