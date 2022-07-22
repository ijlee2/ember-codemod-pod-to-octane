export function mapPaths(oldPath, { find, replace }) {
  const { directory, file } = find;

  if (!oldPath.endsWith(file)) {
    return;
  }

  const key = oldPath
    .replace(new RegExp(`^${directory}/`), '')
    .replace(new RegExp(`/${file}$`), '');

  const newPath = replace(key);

  return [oldPath, newPath];
}
