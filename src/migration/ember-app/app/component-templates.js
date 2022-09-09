import { join } from 'node:path';

import glob from 'glob';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, 'components', '**', 'template.hbs'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'template.hbs',
      },
      replace(key) {
        return `app/components/${key}.hbs`;
      },
    });
  });
}
