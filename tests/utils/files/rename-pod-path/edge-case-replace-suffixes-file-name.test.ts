import { normalize } from 'node:path';

import { assert, test } from '@codemod-utils/tests';

import { renamePodPath } from '../../../../src/utils/files/index.js';

test('utils | files | rename-pod-path > edge case (replace suffixes file name)', function () {
  const oldFilePath = 'tests/unit/pods/index/controller-test.ts';

  const newFilePath = renamePodPath(oldFilePath, {
    podDir: normalize('tests/unit/pods'),
    replace: (dir) => {
      return `tests/unit/controllers/${dir}-test`;
    },
  });

  assert.strictEqual(
    newFilePath,
    normalize('tests/unit/controllers/index-test.ts'),
  );
});
