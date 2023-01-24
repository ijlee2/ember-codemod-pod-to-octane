import { migrationStrategyForComponentTemplates } from '../../../../../src/migration/ember-engine/addon/component-templates.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { options } from '../../../../helpers/shared-test-setups/ember-engine/typescript.js';
import { assert, loadFixture, test } from '../../../../helpers/testing.js';

test('migration | ember-engine | addon | component-templates > TypeScript', function () {
  loadFixture(inputProject, options);

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
