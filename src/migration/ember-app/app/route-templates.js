import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteTemplates(projectRoot) {
  const oldPaths = glob.sync('app/!(components)/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'app',
        file: 'template.hbs',
      },
      replace(key) {
        return `app/templates/${key}.hbs`;
      },
    });
  });
}
