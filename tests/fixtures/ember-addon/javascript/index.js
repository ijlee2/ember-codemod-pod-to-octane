import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-addon/javascript/input');
const outputProject = convertFixtureToJson('ember-addon/javascript/output');

export { inputProject, outputProject };
