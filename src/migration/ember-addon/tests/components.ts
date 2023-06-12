import { findFiles, renamePathByFile } from '@codemod-utils/files';

export function migrationStrategyForComponents(options) {
  const { projectRoot } = options;

  const filePaths = findFiles(
    'tests/integration/components/**/component-test.{js,ts}',
    {
      projectRoot,
    },
  );

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePathByFile(oldFilePath, {
      find: {
        directory: 'tests/integration/components',
        file: 'component-test',
      },
      replace: (key) => {
        return `tests/integration/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
