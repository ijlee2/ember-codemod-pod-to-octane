import { assert, test } from '@codemod-utils/tests';

import { renamePodPath } from '../../../../src/utils/files/index.js';

test('utils | files | rename-pod-path > base case', function () {
  const oldFilePath = 'app/pods/components/navigation-menu/component.d.ts';

  const newFilePath = renamePodPath(oldFilePath, {
    entityDir: 'app/pods/components',
    replace: (key) => {
      return `app/components/${key}`;
    },
  });

  assert.strictEqual(newFilePath, 'app/components/navigation-menu.d.ts');
});
