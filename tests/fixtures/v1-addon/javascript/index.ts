import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon/javascript/input');
const outputProject = convertFixtureToJson('v1-addon/javascript/output');

export { inputProject, outputProject };
