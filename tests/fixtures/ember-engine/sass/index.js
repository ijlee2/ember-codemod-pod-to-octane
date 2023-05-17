import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-engine/sass/input');
const outputProject = convertFixtureToJson('ember-engine/sass/output');

export { inputProject, outputProject };
