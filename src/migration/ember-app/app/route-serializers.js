import { join } from 'node:path';

import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForRouteSerializers(options) {
  const { podPath, projectRoot } = options;

  const filePaths = findFiles(
    join('app', podPath, '**', 'serializer.{js,ts}'),
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: join('app', podPath),
        file: 'serializer',
      },
      replace: (key) => {
        return `app/serializers/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
