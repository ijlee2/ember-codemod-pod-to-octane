import { findFiles } from '@codemod-utils/files';

import { mapFilePath } from '../../../utils/files.js';

export function migrationStrategyForComponentStylesheets(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/components/**/styles.{css,scss}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.scss')) {
      return mapFilePath(oldPath, {
        find: {
          directory: 'addon/components',
          file: 'styles.scss',
        },
        replace(key) {
          return `addon/components/${key}.scss`;
        },
      });
    }

    return mapFilePath(oldPath, {
      find: {
        directory: 'addon/components',
        file: 'styles.css',
      },
      replace(key) {
        return `addon/components/${key}.css`;
      },
    });
  });
}
