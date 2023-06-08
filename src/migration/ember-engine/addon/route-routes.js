import { findFiles, renameFile } from '../../../utils/files.js';

export function migrationStrategyForRouteRoutes(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles('addon/**/route.{js,ts}', {
    cwd: projectRoot,
  });

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'addon',
        file: 'route',
      },
      replace: (key) => {
        return `addon/routes/${key}`;
      },
    });

    return [oldPath, newPath];
  });
}
