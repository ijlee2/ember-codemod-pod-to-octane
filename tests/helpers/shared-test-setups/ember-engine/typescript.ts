import type {
  CodemodOptions,
  OptionsWithProjectName,
} from '../../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  podPath: '',
  projectRoot: 'tmp/ember-engine/typescript',
  projectType: 'engine',
  testRun: false,
};

const options: OptionsWithProjectName = {
  podPath: '',
  projectName: '@ijlee2/ember-workshop-engine',
  projectRoot: 'tmp/ember-engine/typescript',
  projectType: 'engine',
  testRun: false,
};

export { codemodOptions, options };
