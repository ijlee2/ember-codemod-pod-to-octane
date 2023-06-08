import { findFiles, renameFile } from '@codemod-utils/files';

export function migrationStrategyForComponents(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      cwd: projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renameFile(oldPath, {
      find: {
        directory: 'tests/integration/components',
        file: 'component-test',
      },
      replace: (key) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldPath, newPath];
  });
}
