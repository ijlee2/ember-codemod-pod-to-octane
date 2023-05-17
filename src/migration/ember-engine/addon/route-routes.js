import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/**/route.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.ts')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'addon',
          file: 'route.ts',
        },
        replace(key) {
          return `addon/routes/${key}.ts`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: 'addon',
        file: 'route.js',
      },
      replace(key) {
        return `addon/routes/${key}.js`;
      },
    });
  });
}
