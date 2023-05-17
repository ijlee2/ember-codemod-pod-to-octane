import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/ember-engine/sass/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/sass.js';

test('migration | ember-engine | addon | component-stylesheets > sass', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentStylesheets(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/product/card/styles.scss',
      'addon/components/product/card.scss',
    ],
    [
      'addon/components/product/details/styles.scss',
      'addon/components/product/details.scss',
    ],
    [
      'addon/components/product/image/styles.scss',
      'addon/components/product/image.scss',
    ],
  ]);
});
