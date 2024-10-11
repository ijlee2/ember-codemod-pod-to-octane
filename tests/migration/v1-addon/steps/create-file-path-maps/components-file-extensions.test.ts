import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > components (file extensions)', function () {
  const inputProject = {
    addon: {
      components: {
        'navigation-menu': {
          'component.js': '',
          'styles.scss': '',
          'template.hbs': '',
        },
        ui: {
          page: {
            'component.d.ts': '',
            'styles.scss': '',
            'template.hbs': '',
          },
        },
      },
    },
    tests: {
      integration: {
        components: {
          'navigation-menu': {
            'component-test.js': '',
          },
          ui: {
            page: {
              'component-test.js': '',
            },
          },
        },
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/components/navigation-menu/component.js',
        'addon/components/navigation-menu.js',
      ],
      [
        'addon/components/navigation-menu/styles.scss',
        'addon/components/navigation-menu.scss',
      ],
      [
        'addon/components/navigation-menu/template.hbs',
        'addon/components/navigation-menu.hbs',
      ],
      [
        'addon/components/ui/page/component.d.ts',
        'addon/components/ui/page.d.ts',
      ],
      ['addon/components/ui/page/styles.scss', 'addon/components/ui/page.scss'],
      ['addon/components/ui/page/template.hbs', 'addon/components/ui/page.hbs'],
    ]),
  );

  assert.deepStrictEqual(filePathMaps.app, new Map());

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/navigation-menu/component-test.js',
        'tests/integration/components/navigation-menu-test.js',
      ],
      [
        'tests/integration/components/ui/page/component-test.js',
        'tests/integration/components/ui/page-test.js',
      ],
    ]),
  );
});
