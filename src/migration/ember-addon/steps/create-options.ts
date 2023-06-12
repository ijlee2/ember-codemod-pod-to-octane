import { readPackageJson } from '@codemod-utils/json';

import type { CodemodOptions, Options } from '../../../types/index.js';

function analyzePackageJson(
  codemodOptions: CodemodOptions,
): string | undefined {
  const packageJson = readPackageJson(codemodOptions);

  return packageJson.name;
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const projectName = analyzePackageJson(codemodOptions);

  return {
    podPath: codemodOptions.podPath,
    projectName,
    projectRoot: codemodOptions.projectRoot,
    projectType: codemodOptions.projectType,
    testRun: codemodOptions.testRun,
  };
}
