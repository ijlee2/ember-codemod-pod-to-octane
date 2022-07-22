import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentStylesheets(projectRoot) {
  const oldPaths = glob.sync('addon/components/**/styles.css', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'styles.css',
      },
      replace(key) {
        return `addon/components/${key}.css`;
      },
    });
  });
}
