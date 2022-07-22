import { migrationStrategyForComponentTemplates } from '../../../../../src/migration/ember-engine/addon/component-templates.js';
import { inputProject } from '../../../../fixtures/engine-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-javascript';

test('migration | ember-engine | addon | component-templates > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentTemplates(projectRoot), [
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
