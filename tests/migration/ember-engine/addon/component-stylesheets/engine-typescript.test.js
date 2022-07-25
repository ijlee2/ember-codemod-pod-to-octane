import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-engine/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

test('migration | ember-engine | addon | component-stylesheets > TypeScript', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/engine-typescript',
    testRun: false,
  };

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
