import { assert, test } from '@codemod-utils/tests';

import { renamePodPath } from '../../../../src/utils/files/index.js';

test('utils | files | rename-pod-path > edge case (replace suffixes file name)', function () {
  const oldFilePath = 'tests/unit/pods/index/controller-test.ts';

  const newFilePath = renamePodPath(oldFilePath, {
    podDir: 'tests/unit/pods',
    replace: (key) => {
      return `tests/unit/controllers/${key}-test`;
    },
  });

  assert.strictEqual(newFilePath, 'tests/unit/controllers/index-test.ts');
});
