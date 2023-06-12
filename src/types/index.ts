import type { FilePath, FilePathMap } from '@codemod-utils/files';

type CodemodOptions = {
  podPath: string;
  projectRoot: string;
  projectType: 'addon' | 'app' | 'engine';
  testRun: boolean;
};

type FilePathMapEntries = [FilePath, FilePath][];

type Options = {
  podPath: string;
  projectName: string | undefined;
  projectRoot: string;
  projectType: 'addon' | 'app' | 'engine';
  testRun: boolean;
};

type OptionsWithProjectName = Options & {
  projectName: string;
};

export type {
  CodemodOptions,
  FilePathMap,
  FilePathMapEntries,
  Options,
  OptionsWithProjectName,
};
