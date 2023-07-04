import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createFilePathMaps } from '../../../../../src/migration/ember-engine/steps/index.js';
import { inputProject } from '../../../../fixtures/ember-engine/relative-imports/index.js';
import {
  codemodOptions,
  options,
} from '../../../../helpers/shared-test-setups/ember-engine/relative-imports.js';

test('migration | ember-engine | steps | create-file-path-maps > relative-imports', function () {
  loadFixture(inputProject, codemodOptions);

  const filePathMaps = createFilePathMaps(options);

  assert.deepStrictEqual(
    filePathMaps.addon,
    new Map([
      [
        'addon/authenticated/controller.ts',
        'addon/controllers/authenticated.ts',
      ],
      [
        'addon/components/ui/password-reset-form/component.ts',
        'addon/components/ui/password-reset-form.ts',
      ],
      [
        'addon/components/ui/password-reset-page/component.ts',
        'addon/components/ui/password-reset-page.ts',
      ],
      ['addon/index/route.ts', 'addon/routes/index.ts'],
      [
        'addon/password-reset/controller.ts',
        'addon/controllers/password-reset.ts',
      ],
    ]),
  );

  assert.deepStrictEqual(
    filePathMaps.tests,
    new Map([
      [
        'tests/integration/components/ui/password-reset-form/component-test.ts',
        'tests/integration/components/ui/password-reset-form-test.ts',
      ],
      [
        'tests/integration/components/ui/password-reset-page/component-test.ts',
        'tests/integration/components/ui/password-reset-page-test.ts',
      ],
      [
        'tests/unit/authenticated/controller-test.ts',
        'tests/unit/controllers/authenticated-test.ts',
      ],
      ['tests/unit/index/route-test.ts', 'tests/unit/routes/index-test.ts'],
    ]),
  );
});
