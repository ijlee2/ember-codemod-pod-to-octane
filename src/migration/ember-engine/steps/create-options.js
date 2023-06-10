import { readPackageJson } from '@codemod-utils/json';

export function createOptions(codemodOptions) {
  const { name } = readPackageJson(codemodOptions);

  return {
    podPath: codemodOptions.podPath,
    projectName: name,
    projectRoot: codemodOptions.projectRoot,
    projectType: codemodOptions.projectType,
    testRun: codemodOptions.testRun,
  };
}
