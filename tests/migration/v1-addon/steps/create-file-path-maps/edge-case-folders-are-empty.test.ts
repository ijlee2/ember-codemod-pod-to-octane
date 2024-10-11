import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > edge case (folders are empty)', function () {
  const inputProject = {};

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(filePathMaps.addon, new Map());

  assert.deepStrictEqual(filePathMaps.app, new Map());

  assert.deepStrictEqual(filePathMaps.tests, new Map());
});
