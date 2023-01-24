import glob from 'glob';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentClasses(options) {
  const { projectRoot } = options;

  const oldPaths = glob.sync('app/components/**/component.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapFilePath(oldPath, {
      find: {
        directory: 'app/components',
        file: 'component.js',
      },
      replace(key) {
        return `app/components/${key}.js`;
      },
    });
  });
}
