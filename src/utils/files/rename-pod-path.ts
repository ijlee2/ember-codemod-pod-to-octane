import { parseFilePath } from '@codemod-utils/files';

export function renamePodPath(
  filePath: string,
  options: {
    podDir: string;
    replace: (key: string) => string;
  },
): string {
  const { dir, ext, name } = parseFilePath(filePath);
  const { podDir, replace } = options;

  if (!dir.startsWith(podDir)) {
    throw new RangeError(
      `ERROR: The provided path \`${filePath}\` doesn't match the directory pattern \`${podDir}\`.\n`,
    );
  }

  const key = filePath
    .replace(new RegExp(`^${podDir}/`), '')
    .replace(new RegExp(`/${name}${ext}$`), '');

  return `${replace(key)}${ext}`;
}
