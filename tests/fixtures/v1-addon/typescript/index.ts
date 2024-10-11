import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon/typescript/input');
const outputProject = convertFixtureToJson('v1-addon/typescript/output');

export { inputProject, outputProject };
