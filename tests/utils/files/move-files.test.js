import { moveFiles } from '../../../src/utils/files.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/ember-addon/typescript.js';
import { assertFixture, loadFixture, test } from '../../helpers/testing.js';

test('utils | files | move-files', function () {
  const inputProject = {
    addon: {
      components: {
        ui: {
          form: {
            checkbox: {
              'component.ts': '',
            },
          },

          page: {
            'component.d.ts': '',
          },
        },
      },
    },
  };

  const outputProject = {
    addon: {
      components: {
        ui: {
          form: {
            'checkbox.ts': '',
          },

          'page.d.ts': '',
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const migrationStrategy = new Map([
    [
      'addon/components/ui/form/checkbox/component.ts',
      'addon/components/ui/form/checkbox.ts',
    ],
    [
      'addon/components/ui/page/component.d.ts',
      'addon/components/ui/page.d.ts',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  assertFixture(outputProject, codemodOptions);
});
