import { updatePaths } from '../../../../src/utils/ember-addon/app/components.js';
import { moveFiles } from '../../../../src/utils/move-files.js';
import { assertFixture, loadFixture, test } from '../../../test-helpers.js';

test('utils | ember-addon | app | components', function () {
  const options = {
    podPath: '',
    projectRoot: 'tmp/addon-javascript',
    testRun: false,
  };

  loadFixture(
    {
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
    },
    options
  );

  const migrationStrategy = new Map([
    [
      'app/components/ui/form/checkbox/component.js',
      'app/components/ui/form/checkbox.js',
    ],
  ]);

  moveFiles(migrationStrategy, options);

  updatePaths(migrationStrategy, options);

  assertFixture(
    {
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
    },
    options
  );
});
