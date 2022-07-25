import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/components/**/template.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app/components',
        file: 'template.js',
      },
      replace(key) {
        return `app/components/${key}.js`;
      },
    });
  });
}
