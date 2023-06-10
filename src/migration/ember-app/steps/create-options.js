import { readPackageJson } from '@codemod-utils/json';

function analyzePackageJson(codemodOptions) {
  const packageJson = readPackageJson(codemodOptions);

  return packageJson.name;
}

export function createOptions(codemodOptions) {
  const projectName = analyzePackageJson(codemodOptions);

  return {
    podPath: codemodOptions.podPath,
    projectName,
    projectRoot: codemodOptions.projectRoot,
    projectType: codemodOptions.projectType,
    testRun: codemodOptions.testRun,
  };
}
