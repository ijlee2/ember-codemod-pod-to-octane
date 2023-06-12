import type {
  CodemodOptions,
  OptionsWithProjectName,
} from '../../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  podPath: '',
  projectRoot: 'tmp/ember-engine/absolute-imports',
  projectType: 'engine',
  testRun: false,
};

const options: OptionsWithProjectName = {
  podPath: '',
  projectName: '@namespace/package-name',
  projectRoot: 'tmp/ember-engine/absolute-imports',
  projectType: 'engine',
  testRun: false,
};

export { codemodOptions, options };
