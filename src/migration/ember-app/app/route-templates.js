import { join } from 'node:path';

import glob from 'glob';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForRouteTemplates(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, '!(components)', '**', 'template.hbs'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    return mapFilePath(oldPath, {
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
