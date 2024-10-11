import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('engine/relative-imports/input');
const outputProject = convertFixtureToJson('engine/relative-imports/output');

export { inputProject, outputProject };
