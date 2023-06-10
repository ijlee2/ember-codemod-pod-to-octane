import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponentClasses(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(
    join('app', podPath, 'components', '**', 'component.{d.ts,js,ts}'),
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'component',
      },
      replace: (key) => {
        return `app/components/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
