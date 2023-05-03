import { readFileSync } from 'node:fs';
import { join } from 'node:path';

function analyzePackageJson(codemodOptions) {
  const { projectRoot } = codemodOptions;

  try {
    const packageJsonFile = readFileSync(
      join(projectRoot, 'package.json'),
      'utf8',
    );

    const { name } = JSON.parse(packageJsonFile);

    if (!name) {
      throw new SyntaxError('Package name is missing.');
    }

    if (name.includes('/')) {
      // eslint-disable-next-line no-unused-vars
      const [scope, packageName] = name.split('/');

      if (!packageName) {
        throw new SyntaxError('Package name is missing.');
      }
    }

    return name;
  } catch (e) {
    throw new SyntaxError(
      `ERROR: package.json is missing or is not valid. (${e.message})\n`,
    );
  }
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
