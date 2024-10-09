import type { CodemodOptions, Options } from '../../../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  return {
    pod: codemodOptions.pod,
    podPath: codemodOptions.podPath,
    projectRoot: codemodOptions.projectRoot,
    projectType: codemodOptions.projectType,
    testRun: codemodOptions.testRun,
  };
}
