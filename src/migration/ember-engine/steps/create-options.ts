import { readPackageJson, validatePackageJson } from '@codemod-utils/json';

import type {
  CodemodOptions,
  OptionsWithProjectName,
} from '../../../types/index.js';

function analyzePackageJson(codemodOptions: CodemodOptions): string {
  const packageJson = readPackageJson(codemodOptions);

  validatePackageJson(packageJson);

  return packageJson.name!;
}

export function createOptions(
  codemodOptions: CodemodOptions,
): OptionsWithProjectName {
  const projectName = analyzePackageJson(codemodOptions);

  return {
    podPath: codemodOptions.podPath,
    projectName,
    projectRoot: codemodOptions.projectRoot,
    projectType: codemodOptions.projectType,
    testRun: codemodOptions.testRun,
  };
}
