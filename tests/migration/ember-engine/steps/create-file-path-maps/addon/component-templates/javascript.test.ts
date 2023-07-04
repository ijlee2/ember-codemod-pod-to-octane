import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentTemplates } from '../../../../../../../src/migration/ember-engine/steps/create-file-path-maps/addon/component-templates.js';
import { inputProject } from '../../../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | addon | component-templates > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentTemplates(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/product/card/template.hbs',
      'addon/components/product/card.hbs',
    ],
    [
      'addon/components/product/details/template.hbs',
      'addon/components/product/details.hbs',
    ],
    [
      'addon/components/product/image/template.hbs',
      'addon/components/product/image.hbs',
    ],
  ]);
});
