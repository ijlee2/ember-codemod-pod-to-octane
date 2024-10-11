import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app/typescript/input');
const outputProject = convertFixtureToJson('app/typescript/output');

export { inputProject, outputProject };
