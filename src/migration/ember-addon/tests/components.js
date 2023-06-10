import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponents(options) {
  const { projectRoot } = options;

  const oldPaths = findFiles(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      projectRoot,
    },
  );

  return oldPaths.map((oldPath) => {
    const newPath = renamePathByFile(oldPath, {
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
