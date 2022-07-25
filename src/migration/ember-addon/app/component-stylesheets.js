import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/components/**/styles.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app/components',
        file: 'styles.js',
      },
      replace(key) {
        return `app/components/${key}.js`;
      },
    });
  });
}
