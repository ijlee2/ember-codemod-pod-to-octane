import { moveFiles } from '../../src/utils/move-files.js';
import { assertFixture, loadFixture, test } from '../test-helpers.js';

const projectRoot = 'tmp/addon-javascript';

test('utils | move-files', function () {
  loadFixture(projectRoot, {
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
  });

  const migrationStrategy = new Map([
    [
      'addon/components/ui/form/checkbox/component.js',
      'addon/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles({
    migrationStrategy,
    projectRoot,
  });

  assertFixture(projectRoot, {
    addon: {
      components: {
        ui: {
          form: {
            'checkbox.js': '',
          },
        },
      },
    },
  });
});
