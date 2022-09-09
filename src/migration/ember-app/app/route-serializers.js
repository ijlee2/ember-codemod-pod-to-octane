import { join } from 'node:path';

import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteSerializers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(join('app', podPath, '**', 'serializer.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath),
          file: 'serializer.ts',
        },
        replace(key) {
          return `app/serializers/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
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
