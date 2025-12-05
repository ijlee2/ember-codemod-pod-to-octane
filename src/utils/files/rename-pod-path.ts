import { normalize, relative } from 'node:path';

import { parseFilePath } from '@codemod-utils/files';

export function renamePodPath(
  filePath: string,
  options: {
    podDir: string;
    replace: (dir: string) => string;
  },
): string {
  const { podDir, replace } = options;
  const { dir, ext } = parseFilePath(relative(podDir, filePath));

  return `${normalize(replace(dir))}${ext}`;
}
