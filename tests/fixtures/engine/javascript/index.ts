import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('engine/javascript/input');
const outputProject = convertFixtureToJson('engine/javascript/output');

export { inputProject, outputProject };
