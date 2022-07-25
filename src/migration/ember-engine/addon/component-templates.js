import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('addon/components/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'template.hbs',
      },
      replace(key) {
        return `addon/components/${key}.hbs`;
      },
    });
  });
}
