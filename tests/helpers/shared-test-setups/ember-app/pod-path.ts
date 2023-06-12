import type { CodemodOptions, Options } from '../../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  podPath: 'pods',
  projectRoot: 'tmp/ember-app/pod-path',
  projectType: 'app',
  testRun: false,
};

const options: Options = {
  podPath: 'pods',
  projectName: '@ijlee2/ember-workshop-app',
  projectRoot: 'tmp/ember-app/pod-path',
  projectType: 'app',
  testRun: false,
};

export { codemodOptions, options };
