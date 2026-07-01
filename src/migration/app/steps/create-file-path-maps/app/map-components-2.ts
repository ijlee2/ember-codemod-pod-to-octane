import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles, parseFilePath } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

/*
  Case 2: Placed component files outside of /components
*/
export function mapComponents2(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('app', podPath);

  const filePathsForClass = findFiles(`${podDir}/**/component.{d.ts,js,ts}`, {
    ignoreList: [normalizedJoin('app', podPath, 'components/**')],
    projectRoot,
  });

  const filePathsForStylesheet: string[] = [];
  const filePathsForTemplate: string[] = [];

  filePathsForClass.forEach((filePath) => {
    const { dir } = parseFilePath(filePath);

    let filePathForStylesheet = join(dir, 'styles.css');

    if (existsSync(join(projectRoot, filePathForStylesheet))) {
      filePathsForStylesheet.push(filePathForStylesheet);
    }

    filePathForStylesheet = join(dir, 'styles.scss');

    if (existsSync(join(projectRoot, filePathForStylesheet))) {
      filePathsForStylesheet.push(filePathForStylesheet);
    }

    const filePathForTemplate = join(dir, 'template.hbs');

    if (existsSync(join(projectRoot, filePathForTemplate))) {
      filePathsForTemplate.push(filePathForTemplate);
    }
  });

  return [
    ...filePathsForClass,
    ...filePathsForStylesheet,
    ...filePathsForTemplate,
  ].map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (dir: string) => {
        return `app/components/${dir}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
