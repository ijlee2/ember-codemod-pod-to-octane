import glob from 'glob';
import { join } from 'node:path';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForRouteTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, '!(components)', '**', 'template.hbs'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'template.hbs',
      },
      replace(key) {
        return `app/templates/${key}.hbs`;
      },
    });
  });
}
