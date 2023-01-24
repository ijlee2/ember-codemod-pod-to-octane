import { moveFiles } from '../../src/utils/move-files.js';
import { options } from '../helpers/shared-test-setups/ember-addon/javascript.js';
import { assertFixture, loadFixture, test } from '../helpers/testing.js';

test('utils | move-files', function () {
  const inputProject = {
    addon: {
      components: {
        ui: {
          form: {
            checkbox: {
              'component.js': '',
            },
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
            'checkbox.js': '',
          },
        },
      },
    },
  };

  loadFixture(inputProject, options);

  const migrationStrategy = new Map([
    [
      'addon/components/ui/form/checkbox/component.js',
      'addon/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  assertFixture(outputProject, options);
});

test('utils | move-files > removeDirectoryIfEmpty', function () {
  const options = {
    podPath: 'pods',
    projectRoot: 'tmp/app-pod-path',
    testRun: false,
  };

  const inputProject = {
    app: {
      pods: {
        components: {
          ui: {
            form: {
              checkbox: {
                'component.js': '',
              },
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
            'checkbox.js': '',
          },
        },
      },
    },
  };

  loadFixture(inputProject, options);

  const migrationStrategy = new Map([
    [
      'app/pods/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  assertFixture(outputProject, options);
});
