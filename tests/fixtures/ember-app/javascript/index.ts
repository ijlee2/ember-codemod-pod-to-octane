import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-app/javascript/input');
const outputProject = convertFixtureToJson('ember-app/javascript/output');

export { inputProject, outputProject };
