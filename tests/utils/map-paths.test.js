import { mapPaths } from '../../src/utils/map-paths.js';
import { assert, test } from '../test-helpers.js';

test('utils | map-paths', function () {
  const mapping = (oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'component.ts',
      },
      replace(key) {
        return `addon/components/${key}.ts`;
      },
    });
  };

  assert.deepStrictEqual(
    mapping('addon/components/ui/form/checkbox/component.d.ts'),
    undefined
  );

  assert.deepStrictEqual(
    mapping('addon/components/ui/form/checkbox/component.js'),
    undefined
  );

  assert.deepStrictEqual(
    mapping('addon/components/ui/form/checkbox/component.ts'),
    [
      'addon/components/ui/form/checkbox/component.ts',
      'addon/components/ui/form/checkbox.ts',
    ]
  );
});
