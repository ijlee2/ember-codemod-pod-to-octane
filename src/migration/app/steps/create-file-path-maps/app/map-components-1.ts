import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import {
  normalizedJoin,
  renamePodPath,
} from '../../../../../utils/files/index.js';

/*
  Case 1: Placed component files in /components
*/
export function mapComponents1(options: Options): FilePathMapEntries {
  const { podPath, projectRoot } = options;

  const podDir = normalizedJoin('app', podPath, 'components');

  const filePathsForClass = findFiles(`${podDir}/**/component.{d.ts,js,ts}`, {
    projectRoot,
  });

  const filePathsForStylesheet = findFiles(`${podDir}/**/styles.{css,scss}`, {
    projectRoot,
  });

  const filePathsForTemplate = findFiles(`${podDir}/**/template.hbs`, {
    projectRoot,
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
