import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon/sass/input');
const outputProject = convertFixtureToJson('v1-addon/sass/output');

export { inputProject, outputProject };
