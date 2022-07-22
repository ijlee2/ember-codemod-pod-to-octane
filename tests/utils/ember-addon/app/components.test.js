import { updatePaths } from '../../../../src/utils/ember-addon/app/components.js';
import { moveFiles } from '../../../../src/utils/move-files.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

const projectRoot = 'tmp/addon-javascript';

test('utils | ember-addon | app | components', function () {
  loadFixture(projectRoot, {
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
  });

  const migrationStrategy = new Map([
    [
      'app/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles({
    migrationStrategy,
    projectRoot,
  });

  updatePaths({
    migrationStrategy,
    projectRoot,
  });

  assertFixture(projectRoot, {
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
  });
});
