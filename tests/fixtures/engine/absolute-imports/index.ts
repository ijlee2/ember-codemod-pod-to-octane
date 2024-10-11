import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('engine/absolute-imports/input');
const outputProject = convertFixtureToJson('engine/absolute-imports/output');

export { inputProject, outputProject };
