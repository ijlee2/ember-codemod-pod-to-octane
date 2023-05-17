import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteSerializers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'serializer.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'serializer.ts',
        },
        replace(key) {
          return `app/serializers/${key}.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'serializer.js',
      },
      replace(key) {
        return `app/serializers/${key}.js`;
      },
    });
  });
}
