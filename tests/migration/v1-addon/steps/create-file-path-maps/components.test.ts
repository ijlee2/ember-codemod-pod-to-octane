import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/v1-addon/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/v1-addon/typescript.js';

test('migration | v1-addon | steps | create-file-path-maps > components', function () {
  const inputProject = {
    addon: {
      components: {
        'navigation-menu': {
          'component.ts': '',
          'styles.css': '',
          'template.hbs': '',
        },
        ui: {
          page: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },
        },
      },
    },
    app: {
      components: {
        'navigation-menu': {
          'component.js': '',
          'template.js': '',
        },
        ui: {
          page: {
            'component.js': '',
            'template.js': '',
          },
        },
      },
    },
    tests: {
      integration: {
        components: {
          'navigation-menu': {
            'component-test.ts': '',
          },
          ui: {
            page: {
              'component-test.ts': '',
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
        'addon/components/navigation-menu/component.ts',
        'addon/components/navigation-menu.ts',
      ],
      [
        'addon/components/navigation-menu/styles.css',
        'addon/components/navigation-menu.css',
      ],
      [
        'addon/components/navigation-menu/template.hbs',
        'addon/components/navigation-menu.hbs',
      ],
      ['addon/components/ui/page/component.ts', 'addon/components/ui/page.ts'],
      ['addon/components/ui/page/styles.css', 'addon/components/ui/page.css'],
      ['addon/components/ui/page/template.hbs', 'addon/components/ui/page.hbs'],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.app,
    new Map([
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
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/navigation-menu/component-test.ts',
        'tests/integration/components/navigation-menu-test.ts',
      ],
      [
        'tests/integration/components/ui/page/component-test.ts',
        'tests/integration/components/ui/page-test.ts',
      ],
    ]),
  );
});
