import { assert, loadFixture, test } from '@codemod-utils/tests';

import { migrationStrategyForComponentClasses } from '../../../../../../../src/migration/ember-engine/steps/create-file-path-maps/addon/component-classes.js';
import { inputProject } from '../../../../../../fixtures/ember-engine/javascript/index.js';
import {
  codemodOptions,
  options,
} from '../../../../../../helpers/shared-test-setups/ember-engine/javascript.js';

test('migration | ember-engine | addon | component-classes > javascript', function () {
  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = migrationStrategyForComponentClasses(options);

  assert.deepStrictEqual(migrationStrategy, [
    [
      'addon/components/product/details/component.js',
      'addon/components/product/details.js',
    ],
    [
      'addon/components/product/image/component.js',
      'addon/components/product/image.js',
    ],
  ]);
});
