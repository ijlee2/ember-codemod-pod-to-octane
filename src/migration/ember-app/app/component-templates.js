import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentTemplates(projectRoot) {
  const oldPaths = glob.sync('app/components/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app/components',
        file: 'template.hbs',
      },
      replace(key) {
        return `app/components/${key}.hbs`;
      },
    });
  });
}
