import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-app/pod-path/input');
const outputProject = convertFixtureToJson('ember-app/pod-path/output');

export { inputProject, outputProject };
