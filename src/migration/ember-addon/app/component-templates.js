import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('app/components/**/template.js', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapFilePath(oldPath, {
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
