import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | addon | component-stylesheets > javascript', function () {
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
