import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app/javascript/input');
const outputProject = convertFixtureToJson('app/javascript/output');

export { inputProject, outputProject };
