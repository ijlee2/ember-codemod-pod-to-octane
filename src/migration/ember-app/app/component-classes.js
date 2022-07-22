import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentClasses(projectRoot) {
  const oldPaths = glob.sync('app/components/**/component.{d.ts,js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.d.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app/components',
          file: 'component.d.ts',
        },
        replace(key) {
          return `app/components/${key}.d.ts`;
        },
      });
    }

    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: 'app/components',
          file: 'component.ts',
        },
        replace(key) {
          return `app/components/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: 'app/components',
        file: 'component.js',
      },
      replace(key) {
        return `app/components/${key}.js`;
      },
    });
  });
}
