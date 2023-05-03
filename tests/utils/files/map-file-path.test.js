import { mapFilePath } from '../../../src/utils/files.js';
import { assert, test } from '../../helpers/testing.js';

test('utils | files | map-file-path', function () {
  const mapping = (oldPath) => {
    return mapFilePath(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'component.ts',
      },
      replace(key) {
        return `addon/components/${key}.ts`;
      },
    });
  };

  assert.throws(
    () => {
      mapping('addon/components/ui/form/checkbox/component.d.ts');
    },
    (error) => {
      assert.strictEqual(
        error.message,
        'ERROR: The provided path `addon/components/ui/form/checkbox/component.d.ts` does not end with `component.ts`.\n',
      );

      return true;
    },
  );

  assert.throws(
    () => {
      mapping('addon/components/ui/form/checkbox/component.js');
    },
    (error) => {
      assert.strictEqual(
        error.message,
        'ERROR: The provided path `addon/components/ui/form/checkbox/component.js` does not end with `component.ts`.\n',
      );

      return true;
    },
  );

  assert.deepStrictEqual(
    mapping('addon/components/ui/form/checkbox/component.ts'),
    [
      'addon/components/ui/form/checkbox/component.ts',
      'addon/components/ui/form/checkbox.ts',
    ],
  );
});
