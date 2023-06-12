import type { CodemodOptions, Options } from '../../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  podPath: '',
  projectRoot: 'tmp/ember-addon/typescript',
  projectType: 'addon',
  testRun: false,
};

const options: Options = {
  podPath: '',
  projectName: '@ijlee2/ember-workshop-addon',
  projectRoot: 'tmp/ember-addon/typescript',
  projectType: 'addon',
  testRun: false,
};

export { codemodOptions, options };
