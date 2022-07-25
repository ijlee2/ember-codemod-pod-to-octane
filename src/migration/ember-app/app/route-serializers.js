import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteSerializers(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/**/serializer.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app',
          file: 'serializer.ts',
        },
        replace(key) {
          return `app/serializers/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'serializer.js',
      },
      replace(key) {
        return `app/serializers/${key}.js`;
      },
    });
  });
}
