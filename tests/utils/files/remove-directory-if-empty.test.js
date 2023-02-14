import { removeDirectoryIfEmpty } from '../../../src/utils/files.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/ember-addon/typescript.js';
import { assertFixture, loadFixture, test } from '../../helpers/testing.js';

test('utils | files | remove-directory-if-empty > parent directories are empty', function () {
  const inputProject = {
    addon: {
      components: {
        ui: {
          form: {
            checkbox: {},
          },
        },
      },
    },
  };

  const outputProject = {};

  loadFixture(inputProject, codemodOptions);

  removeDirectoryIfEmpty({
    oldPath: 'addon/components/ui/form/checkbox/component.ts',
    projectRoot: options.projectRoot,
  });

  assertFixture(outputProject, codemodOptions);
});

test('utils | files | remove-directory-if-empty > a parent directory is not empty', function () {
  const inputProject = {
    addon: {
      components: {
        ui: {
          form: {
            checkbox: {},
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
          page: {
            'component.d.ts': '',
          },
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  removeDirectoryIfEmpty({
    oldPath: 'addon/components/ui/form/checkbox/component.ts',
    projectRoot: options.projectRoot,
  });

  assertFixture(outputProject, codemodOptions);
});
