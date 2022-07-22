import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteTemplates(projectRoot) {
  const oldPaths = glob.sync('addon/!(components)/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'addon',
        file: 'template.hbs',
      },
      replace(key) {
        return `addon/templates/${key}.hbs`;
      },
    });
  });
}
