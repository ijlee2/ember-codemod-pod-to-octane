export function mapFilePath(oldPath, { find, replace }) {
  const { directory, file } = find;

  if (!oldPath.endsWith(file)) {
    throw new RangeError(
      `ERROR: The provided path \`${oldPath}\` does not end with \`${file}\`.\n`,
    );
  }

  const key = oldPath
    .replace(new RegExp(`^${directory}/`), '')
    .replace(new RegExp(`/${file}$`), '');

  const newPath = replace(key);

  return [oldPath, newPath];
}
