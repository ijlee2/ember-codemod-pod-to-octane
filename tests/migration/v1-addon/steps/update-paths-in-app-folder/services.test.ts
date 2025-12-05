import { moveFiles } from '@codemod-utils/files';
import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { updatePathsInAppFolder } from '../../../../../src/migration/v1-addon/steps/index.js';
import { normalizeFilePathMap } from '../../../../helpers/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | update-paths-in-app-folder > services', function () {
  const inputProject = {
    app: {
      experiments: {
        'service.js': `export { default } from 'my-v1-addon/experiments/service';`,
      },
    },
  };

  const outputProject = {
    app: {
      services: {
        'experiments.js': `export { default } from 'my-v1-addon/services/experiments';`,
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMap = normalizeFilePathMap(
    new Map([['app/experiments/service.js', 'app/services/experiments.js']]),
  );

  moveFiles(filePathMap, options);

  updatePathsInAppFolder(filePathMap, options);

  assertFixture(outputProject, codemodOptions);
});
