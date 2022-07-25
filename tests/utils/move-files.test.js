import { moveFiles } from '../../src/utils/move-files.js';
import { assertFixture, loadFixture, test } from '../test-helpers.js';

test('utils | move-files', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-javascript',
    testRun: false,
  };

  loadFixture(
    {
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
    },
    options
  );

  const migrationStrategy = new Map([
    [
      'addon/components/ui/form/checkbox/component.js',
      'addon/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  assertFixture(
    {
      addon: {
        components: {
          ui: {
            form: {
              'checkbox.js': '',
            },
          },
        },
      },
    },
    options
  );
});
