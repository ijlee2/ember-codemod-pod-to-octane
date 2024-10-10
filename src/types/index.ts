import type { FilePath, FilePathMap } from '@codemod-utils/files';

type CodemodOptions = {
  pod: string;
  podPath: string;
  projectRoot: string;
  projectType: 'addon' | 'app' | 'engine';
  testRun: boolean;
};

type FilePathMapEntries = [FilePath, FilePath][];

type Options = {
  pod: string;
  podPath: string;
  projectRoot: string;
  projectType: 'addon' | 'app' | 'engine';
  testRun: boolean;
};

export type { CodemodOptions, FilePathMap, FilePathMapEntries, Options };
