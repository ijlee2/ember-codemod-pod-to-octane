import { normalize } from 'node:path';

import { assert, test } from '@codemod-utils/tests';

import { renamePodPath } from '../../../../src/utils/files/index.js';

test('utils | files | rename-pod-path > base case', function () {
  const oldFilePath = 'app/pods/components/navigation-menu/component.d.ts';

  const newFilePath = renamePodPath(oldFilePath, {
    podDir: normalize('app/pods/components'),
    replace: (dir) => {
      return `app/components/${dir}`;
    },
  });

  assert.strictEqual(
    newFilePath,
    normalize('app/components/navigation-menu.d.ts'),
  );
});
