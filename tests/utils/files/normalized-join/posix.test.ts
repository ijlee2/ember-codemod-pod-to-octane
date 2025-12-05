import { sep } from 'node:path';

import { assert, test } from '@codemod-utils/tests';

import { normalizedJoin } from '../../../../src/utils/files/index.js';

const onPosix = sep === '/';

test('utils | files | normalized-join > POSIX', function () {
  if (!onPosix) {
    return;
  }

  const pattern = normalizedJoin('app/components', 'ui', '**/*.ts');

  assert.strictEqual(pattern, 'app/components/ui/**/*.ts');
});
