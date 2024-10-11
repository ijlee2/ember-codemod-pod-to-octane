import { moveFiles } from '@codemod-utils/files';
import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { updatePathsInAppFolder } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | update-paths-in-app-folder > components', function () {
  const inputProject = {
    app: {
      components: {
        'navigation-menu': {
          'component.js':
            "export { default } from 'my-v1-addon/components/navigation-menu/component';\n",
          'template.js':
            "export { default } from 'my-v1-addon/components/navigation-menu/template';\n",
        },
        ui: {
          page: {
            'component.js':
              "export { default } from 'my-v1-addon/components/ui/page/component';\n",
            'template.js':
              "export { default } from 'my-v1-addon/components/ui/page/template';\n",
          },
        },
      },
    },
  };

  const outputProject = {
    app: {
      components: {
        'navigation-menu.js':
          "export { default } from 'my-v1-addon/components/navigation-menu';\n",
        ui: {
          'page.js':
            "export { default } from 'my-v1-addon/components/ui/page';\n",
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMap = new Map([
    [
      'app/components/navigation-menu/component.js',
      'app/components/navigation-menu.js',
    ],
    [
      'app/components/navigation-menu/template.js',
      'app/components/navigation-menu.js',
    ],
    ['app/components/ui/page/component.js', 'app/components/ui/page.js'],
    ['app/components/ui/page/template.js', 'app/components/ui/page.js'],
  ]);

  moveFiles(filePathMap, options);

  updatePathsInAppFolder(filePathMap, options);

  assertFixture(outputProject, codemodOptions);
});
