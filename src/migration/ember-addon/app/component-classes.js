import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentClasses(projectRoot) {
  const oldPaths = glob.sync('app/components/**/component.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
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
