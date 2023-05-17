import { moveFiles } from '@codemod-utils/files';

import { updatePathsInAppFolder } from '../../../../src/utils/ember-addon/app/components.js';
import {
  codemodOptions,
  options,
} from '../../../helpers/shared-test-setups/ember-addon/javascript.js';
import { assertFixture, loadFixture, test } from '../../../helpers/testing.js';

test('utils | ember-addon | app | components', function () {
  const inputProject = {
    app: {
      components: {
        ui: {
          form: {
            checkbox: {
              'component.js':
                "export { default } from 'addon-javascript/components/ui/form/checkbox/component';\n",
            },
          },
        },
      },
    },
  };

  const outputProject = {
    app: {
      components: {
        ui: {
          form: {
            'checkbox.js':
              "export { default } from 'addon-javascript/components/ui/form/checkbox';\n",
          },
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = new Map([
    [
      'app/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  updatePathsInAppFolder(migrationStrategy, options);

  assertFixture(outputProject, codemodOptions);
});
