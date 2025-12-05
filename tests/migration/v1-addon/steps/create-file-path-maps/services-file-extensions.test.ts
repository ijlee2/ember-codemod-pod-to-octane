import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import { normalizeFilePathMap } from '../../../../helpers/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > services (file extensions)', function () {
  const inputProject = {
    addon: {
      experiments: {
        'service.js': '',
      },
    },
    tests: {
      unit: {
        experiments: {
          'service-test.js': '',
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    normalizeFilePathMap(
      new Map([
        ['addon/experiments/service.js', 'addon/services/experiments.js'],
      ]),
    ),
  );

  assert.deepStrictEqual(filePathMaps.app, normalizeFilePathMap(new Map()));

  assert.deepStrictEqual(
    filePathMaps.tests,
    normalizeFilePathMap(
      new Map([
        [
          'tests/unit/experiments/service-test.js',
          'tests/unit/services/experiments-test.js',
        ],
      ]),
    ),
  );
});
