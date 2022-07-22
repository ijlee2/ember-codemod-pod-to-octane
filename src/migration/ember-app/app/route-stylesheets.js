import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteStylesheets(projectRoot) {
  const oldPaths = glob.sync('app/!(components)/**/styles.css', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'styles.css',
      },
      replace(key) {
        return `app/styles/${key}.css`;
      },
    });
  });
}
