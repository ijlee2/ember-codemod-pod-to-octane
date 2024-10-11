import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app/sass/input');
const outputProject = convertFixtureToJson('app/sass/output');

export { inputProject, outputProject };
