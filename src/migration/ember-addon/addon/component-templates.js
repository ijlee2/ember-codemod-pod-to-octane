import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentTemplates(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/template.hbs', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    return mapFilePath(oldPath, {
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
