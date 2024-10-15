import { assert, test } from '@codemod-utils/tests';

import { renamePodPath } from '../../../../src/utils/files/index.js';

test('utils | files | rename-pod-path > error handling (directory does not match)', function () {
  const oldFilePath = 'app/components/navigation-menu/component.js';

  assert.throws(
    () => {
      renamePodPath(oldFilePath, {
        podDir: 'addon/components',
        replace: (key) => {
          return `addon/components/${key}`;
        },
      });
    },
    (error: Error) => {
      assert.strictEqual(
        error.message,
        "ERROR: The provided path `app/components/navigation-menu/component.js` doesn't match the directory pattern `addon/components`.\n",
      );

      return true;
    },
  );
});
