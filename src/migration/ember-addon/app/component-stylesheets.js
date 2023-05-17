import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/styles.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapFilePath(oldPath, {
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
