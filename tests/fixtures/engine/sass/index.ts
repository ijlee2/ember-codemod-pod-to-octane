import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('engine/sass/input');
const outputProject = convertFixtureToJson('engine/sass/output');

export { inputProject, outputProject };
