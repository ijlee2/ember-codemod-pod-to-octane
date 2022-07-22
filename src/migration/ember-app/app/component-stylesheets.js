import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentStylesheets(projectRoot) {
  const oldPaths = glob.sync('app/components/**/styles.css', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app/components',
        file: 'styles.css',
      },
      replace(key) {
        return `app/components/${key}.css`;
      },
    });
  });
}
