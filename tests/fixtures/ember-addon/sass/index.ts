import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-addon/sass/input');
const outputProject = convertFixtureToJson('ember-addon/sass/output');

export { inputProject, outputProject };
