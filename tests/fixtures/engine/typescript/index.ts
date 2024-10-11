import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('engine/typescript/input');
const outputProject = convertFixtureToJson('engine/typescript/output');

export { inputProject, outputProject };
