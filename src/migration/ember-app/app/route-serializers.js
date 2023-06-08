import { join } from 'node:path';

import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteSerializers(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = findFiles(join('app', podPath, '**', 'serializer.{js,ts}'), {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: join('app', podPath),
        file: 'serializer',
      },
      replace: (key) => {
        return `app/serializers/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
