import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > services', function () {
  const inputProject = {
    addon: {
      experiments: {
        'service.ts': '',
      },
    },
    app: {
      experiments: {
        'service.js': '',
      },
    },
    tests: {
      unit: {
        experiments: {
          'service-test.ts': '',
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      ['addon/experiments/service.ts', 'addon/services/experiments.ts'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([['app/experiments/service.js', 'app/services/experiments.js']]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/unit/experiments/service-test.ts',
        'tests/unit/services/experiments-test.ts',
      ],
    ]),
  );
});
