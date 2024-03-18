import { parseFilePath } from '@codemod-utils/files';

export function renamePodPath(
  filePath: string,
  options: {
    entityDir: string;
    replace: (key: string) => string;
  },
): string {
  const { dir, ext, name } = parseFilePath(filePath);
  const { entityDir, replace } = options;

  if (!dir.startsWith(entityDir)) {
    throw new RangeError(
      `ERROR: The provided path \`${filePath}\` doesn't match the directory pattern \`${entityDir}\`.\n`,
    );
  }

  const key = filePath
    .replace(new RegExp(`^${entityDir}/`), '')
    .replace(new RegExp(`/${name}${ext}$`), '');

  return `${replace(key)}${ext}`;
}
